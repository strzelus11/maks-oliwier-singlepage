import Header from "@/components/Header";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function SignInPage() {
	const router = useRouter();
	const { course } = router.query;

	console.log(course);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [courseName, setCourseName] = useState("");

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
					course: courseName,
				}),
			});

			const data = await response.json();
			if (response.ok) {
				console.log("Email sent successfully:", data);
				toast.success("Zostałeś zapisany!");
			} else {
				console.error("Error sending email:", data.error);
			}
        } else {
            toast.error("Uzupełnij wszystkie pola.")
        }
	}
	return (
		<div className="flex flex-col h-screen">
			<Header />
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
					<button
						onClick={() => sendEmail()}
						className="btn-outline hover:scale-100 hover:opacity-90 w-full flex justify-center mt-3"
					>
						Send
					</button>
				</motion.div>
			</div>
		</div>
	);
}
