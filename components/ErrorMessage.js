import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function ErrorMessage({ message, error }) {
	return (
		<motion.span
			variants={fadeIn("right", "spring", 0, 1)}
			initial="hidden"
			whileInView="show"
			exit="exit"
			className={`text-sm ${
				error ? "text-red-500" : "text-green-500"
			} text-right`}
		>
			{message}
		</motion.span>
	);
}
