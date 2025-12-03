import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import SendButton from "@/components/SendButton";
import Head from "next/head";
import ErrorMessage from "@/components/ErrorMessage";

export default function SignInPage() {
  const router = useRouter();
  const { course } = router.query;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (course) {
      setCourseName(course);
    }
  }, [course]);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.com$/;
    if (email !== "") {
      if (!regex.test(email)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else {
      setEmailError(null);
    }
  }, [email]);

  async function sendEmail() {
    if (name !== "" && email !== "" && message !== "" && !emailError) {
      setLoading(true);

      const emailPromise = fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          course: courseName,
        }),
      }).then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            console.log("Email sent successfully:", data);
          });
        } else {
          return response.json().then((data) => {
            console.error("Error sending email:", data.error);
            throw new Error("Błąd przy wysyłaniu emaila");
          });
        }
      });

      await toast
        .promise(emailPromise, {
          loading: "Wysyłanie...",
          success: "Email wysłany pomyślnie!",
          error: "Błąd przy wysyłaniu emaila",
        })
        .then(() => {
          // 🔹 Przekierowanie zależne od kursu
          switch (courseName) {
            case "Fizyka":
              router.push("/thank-you/fizyka");
              break;
            case "Matematyka":
              router.push("/thank-you/matematyka");
              break;
            case "Data Science":
              router.push("/thank-you/datascience");
              break;
            case "Web Development":
              router.push("/thank-you/webdev");
              break;
            case "Koło olimpijskie z fizyki":
              router.push("/thank-you/olimpiada-fizyka");
              break;
            default:
              router.push("/thank-you");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.error("Uzupełnij wszystkie pola.");
    }
  }

  return (
    <>
      <Head>
        <title>Insight Hunters | Zapisz się</title>
      </Head>
      <div className="flex flex-col h-screen">
        <div className="mt-[70px] lg:mt-[80px] flex flex-col justify-center items-center h-full p-5">
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            className="box lg:w-[40%]"
          >
            <h2 className="text-center text-3xl">Zapisz się</h2>
            <label>Rodzaj kursu</label>
            <select
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            >
              <option value="Fizyka">
                Korepetycje z fizyki (poziom liceum i studiów)
              </option>
              <option value="Matematyka">
                Korepetycje z matematyki (poziom liceum i studiów)
              </option>
              <option value="Data Science">Korepetycje z data science</option>
              <option value="Web Development">
                Korepetycje z web development
              </option>
              <option value="Koło olimpijskie z fizyki">
                Koło olimpijskie z fizyki
              </option>
            </select>
            <div className="flex justify-between">
              <label>Email</label>
              <AnimatePresence>
                {emailError !== null && (
                  <ErrorMessage
                    message={
                      emailError
                        ? "Your email is invalid."
                        : "Your email is correct!"
                    }
                    error={emailError}
                  />
                )}
              </AnimatePresence>
            </div>
            <input
              type="email"
              placeholder="Twój adres email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Imię i nazwisko</label>
            <input
              type="text"
              placeholder="Twoje imię i nazwisko"
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            <label>Wiadomość</label>
            <textarea
              className="max-h-[12rem]"
              placeholder="Opisz problem, który chciałbyś z nami przedyskutować na zajęciach."
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            ></textarea>
            <SendButton onClick={sendEmail} disabled={loading} />
          </motion.div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
