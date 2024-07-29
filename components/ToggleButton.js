import { motion, AnimatePresence } from "framer-motion";
import { GiSnail } from "react-icons/gi";
import { GiRocket } from "react-icons/gi";

const ToggleButton = ({ advanced, setAdvanced }) => {

	return (
		<div
			onClick={() => setAdvanced((prev) => !prev)}
			className="text-white absolute sm:-left-5 -top-10 bg-secondary shadow-2xl border-2 border-black rounded-xl px-3 py-1 flex items-center gap-5 transition-all delay-150 duration-500 hover:bg-black hover:border-white cursor-pointer overflow-hidden"
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
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-10"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
						Zaawansowany
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
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-10"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M.75 9.75a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-6Zm19.5 0a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-6Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
						Początkujący
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
