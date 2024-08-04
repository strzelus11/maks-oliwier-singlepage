import { motion, AnimatePresence } from "framer-motion";

const ToggleButton = ({ advanced, setAdvanced }) => {

	return (
		<div
			onClick={() => setAdvanced((prev) => !prev)}
			className="text-white absolute sm:-left-5 -top-10 bg-secondary shadow-2xl border-2 border-black rounded-xl px-3 py-2 flex items-center gap-5 transition-all delay-150 duration-500 hover:bg-black hover:border-white cursor-pointer overflow-hidden"
		>
			<AnimatePresence mode="wait">
				{advanced ? (
					<motion.div
						className="flex gap-5 items-center"
						key="advanced"
						initial={{ opacity: 0, translateX: -50, scale: 0.8 }}
						animate={{
							opacity: 1,
							translateX: 0,
							scale: 1,
							animationDelay: 0.3,
						}}
						exit={{ opacity: 0, translateX: 50, scale: 0.8 }}
						transition={{ duration: 0.3 }}
					>
						<div className="text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
								/>
							</svg>
						</div>
						Podejście
					</motion.div>
				) : (
					<motion.div
						className="flex gap-5 items-center"
						key="basic"
						initial={{ opacity: 0, translateX: -50, scale: 0.8 }}
						animate={{
							opacity: 1,
							translateX: 0,
							scale: 1,
							animationDelay: 0.3,
						}}
						exit={{ opacity: 0, translateX: 50, scale: 0.8 }}
						transition={{ duration: 0.3 }}
					>
						<div className="text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
								/>
							</svg>
						</div>
						Metody
					</motion.div>
				)}
			</AnimatePresence>
			<div className="text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="size-6"
				>
					<path
						fillRule="evenodd"
						d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default ToggleButton;
