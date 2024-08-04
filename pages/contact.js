import Header from "@/components/Header";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useState } from "react";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import SendButton from "@/components/SendButton";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

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
				}),
			});

			const data = await response.json();
			if (response.ok) {
				console.log("Email sent successfully:", data);
				toast.success("Wiadomość wysłana pomyślnie.");
			} else {
				console.error("Error sending email:", data.error);
			}
		} else {
			toast.error("Uzupełnij wszystkie pola.");
		}
	}
	return (
		<div className="flex flex-col h-screen">
			<div className="mt-[70px] lg:mt-[80px] flex flex-col justify-center items-center h-full p-5">
				<motion.div
					variants={fadeIn("up", "spring", 0.1, 1)}
					initial="hidden"
					whileInView="show"
					className="box lg:w-[40%]"
				>
					<h2 className="text-center text-3xl">Napisz do nas</h2>
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
	);
}
