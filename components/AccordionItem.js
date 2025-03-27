import { AnimatePresence, easeOut, motion } from "framer-motion";

export default function AccordionItem({ title, content, isOpen, onClick }) {
	return (
		<div className="text-white">
			<div
				className="p-3 sm:p-5 cursor-pointer bg-secondary flex justify-between items-center"
				onClick={onClick}
			>
				<h2 className="mb-0 text-xl sm:text-2xl">{title}</h2>
				<div className="text-primary">
					<AnimatePresence mode="wait">
						{isOpen ? (
							<motion.svg
								key="open"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path
									fillRule="evenodd"
									d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
									clipRule="evenodd"
								/>
							</motion.svg>
						) : (
							<motion.svg
								key="close"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6"
							>
								<path
									fillRule="evenodd"
									d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
									clipRule="evenodd"
								/>
							</motion.svg>
						)}
					</AnimatePresence>
				</div>
			</div>
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: isOpen ? "auto" : 0 }}
				transition={{ ease: easeOut, duration: 0.5 }}
				className="overflow-hidden"
			>
				<div className="px-4 pb-4 bg-secondary text-gray-300 text-lg">{content}</div>
			</motion.div>
		</div>
	);
}
