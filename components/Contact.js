import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import SendButton from "@/components/SendButton";
import ErrorMessage from "@/components/ErrorMessage";
import { useRouter } from "next/router";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error(data.error || "Błąd przy wysyłaniu emaila");
          });
        }
      });

      await toast
        .promise(emailPromise, {
          loading: "Wysyłanie...",
          success: "Email wysłany pomyślnie!",
          error: "Błąd przy wysyłaniu emaila",
        })
        .finally(() => setLoading(false));

      router.push("/thank-you");
    } else {
      toast.error("Uzupełnij wszystkie pola.");
    }
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      className="box w-full lg:w-[40%] p-5"
    >
      <h2 className="text-center text-3xl">Napisz do nas</h2>

      <div className="flex justify-between">
        <label>Email</label>
        <AnimatePresence>
          {emailError !== null && (
            <ErrorMessage
              message={
                emailError ? "Your email is invalid." : "Your email is correct!"
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
      />

      <label>Wiadomość</label>
      <textarea
        className="max-h-[12rem]"
        placeholder="Opisz problem, który chciałbyś z nami przedyskutować :)"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <SendButton onClick={sendEmail} disabled={loading} />
    </motion.div>
  );
}
