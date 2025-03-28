import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function OfferCard({
	title,
	subtitle,
	price,
	time,
	group,
	index,
}) {
    const router = useRouter();
    
	const handleEnroll = () => {
		router.push({
			pathname: "/sign-in",
			query: { course: title },
		});
	};
	return (
		<motion.div
			whileHover={{ scale: 1.02, translateY: -5 }}
			variants={fadeIn("down", "spring", 0.1 * index, 1)}
			initial="hidden"
			animate="show"
			className="box flex flex-col items-center justify-between shadow-2xl transition-all delay-100 duration-300 lg:h-[20rem] border-2 border-primary"
		>
			<div className="lg:h-20">
				<h2 className="text-center text-2xl font-semibold">{title}</h2>
				<h3 className="text-gray-500 text-center">{subtitle}</h3>
			</div>
			<div className="my-5 lg:my-0">
				<span className="text-5xl font-semibold">{price}</span>zł/{time}
			</div>
			<div className="flex flex-col items-center w-full">
				<div className="mt-3 bg-black border-2 p-2 rounded-full flex gap-3">
					{group ? (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path
									fillRule="evenodd"
									d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
									clipRule="evenodd"
								/>
								<path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
							</svg>
							2h zajęć w grupie
						</>
					) : (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path
									fillRule="evenodd"
									d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
									clipRule="evenodd"
								/>
							</svg>
							Zajęcia Indywidualne
						</>
					)}
				</div>
				<button
					onClick={handleEnroll}
					className="btn-primary flex justify-center w-[80%] mt-5"
				>
					Zapisz się!
				</button>
			</div>
		</motion.div>
	);
}
