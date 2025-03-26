import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import SendButton from "@/components/SendButton";
import Head from "next/head";
import ErrorMessage from "@/components/ErrorMessage";

export default function ContactPage() {
	const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

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
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					message,
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
				<title>Insight Hunters | Kontakt</title>
				<meta
					name="description"
					content="Zajęcia indywidualne z fizyki, matematyki i programowania. Przygotowanie do matury, olimpiad i rozwój pasji. Online i stacjonarnie."
				/>
				<link rel="icon" href="/file.png" type="image/png" />
				<meta name="robots" content="index, follow" />
				<meta
					name="keywords"
					content="korepetycje, fizyka, matematyka, programowanie, nauka, tutoring, szkolenia"
				/>
				<meta
					property="og:title"
					content="Insight Hunters – Korepetycje i Szkolenia"
				/>
				<meta
					property="og:description"
					content="Profesjonalne korepetycje z fizyki, matematyki i programowania. Online lub stacjonarnie."
				/>
				<meta property="og:url" content="https://insighthunters.pl/" />
			</Head>
			<div className="flex flex-col h-screen">
				<div className="mt-[70px] lg:mt-[80px] flex flex-col justify-center items-center h-full p-5">
					<motion.div
						variants={fadeIn("up", "spring", 0.1, 1)}
						initial="hidden"
						whileInView="show"
						className="box lg:w-[40%]"
					>
						<h2 className="text-center text-3xl">Napisz do nas</h2>
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
						/>
						<label>Wiadomość</label>
						<textarea
							className="max-h-[12rem]"
							placeholder="Opisz problem, który chciałbyś z nami przedyskutować na zajęciach."
							onChange={(e) => setMessage(e.target.value)}
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
