import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function SectionLayout({
	id,
	title,
	subtitle,
	children,
	className,
}) {
	return (
		<section
			className={`flex flex-col screen justify-center items-center p-3 sm:p-10 relative w-full ${className}`}
			id={id}
		>
			<motion.h1
				variants={fadeIn("down", "spring", 0, 1)}
				initial="hidden"
				whileInView="show"
				className="text-white text-center"
			>
				{title}
			</motion.h1>
			<h2 className="text-xl text-gray-500 mb-5">{subtitle}</h2>
			<motion.div
				variants={fadeIn("up", "spring", 0.2, 1)}
				initial="hidden"
                whileInView="show"
                className="flex justify-center w-full"
			>
				{children}
			</motion.div>
		</section>
	);
}
