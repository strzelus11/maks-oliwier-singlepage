import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import SendButton from "@/components/SendButton";
import Head from "next/head";

export default function SignInPage() {
	const router = useRouter();
	const { course } = router.query;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [courseName, setCourseName] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (course) {
			setCourseName(course);
		}
	}, [course]);

	async function sendEmail() {
		if (name !== "" && email !== "" && message !== "") {
			const response = await fetch("/api/send", {
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
			});

			const data = await response.json();
			if (response.ok) {
				console.log("Email sent successfully:", data);
				toast.success("Zostałeś zapisany!");
			} else {
				console.error("Error sending email:", data.error);
				toast.error("Błąd przy wysyłaniu emaila");
			}
		} else {
			toast.error("Uzupełnij wszystkie pola.");
		}
	}
	return (
		<>
			<Head>
				<title>Physics | Zapisz się</title>
				<link rel="shortcut icon" href="./file.png" type="image/x-icon" />
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
							value={course}
							onChange={(e) => setCourseName(e.target.value)}
						>
							<option value="Korepetycje z fizyki">
								Korepetycje z fizyki (poziom liceum i studiów)
							</option>
							<option value="Korepetycje z matematyki">
								Korepetycje z matematyki (poziom liceum i studiów)
							</option>
							<option value="Koło olimpijskie z fizyki">
								Koło olimpijskie z fizyki
							</option>
							<option value="Korepetycje z programowania">
								Korepetycje z programowania
							</option>
						</select>
						<label>Email</label>
						<input
							type="email"
							placeholder="Twój email"
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
							placeholder="Chcesz o coś zapytać?"
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<SendButton onClick={sendEmail} />
					</motion.div>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}
