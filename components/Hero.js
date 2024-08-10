import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function Hero() {
	return (
		<div id="Hero" className="p-5 lg:py-0 bg-black text-white flex justify-center screen lg:full">
			<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[40px] items-center xl:items-start">
				<motion.div
					variants={fadeIn("right", "spring", 0.3, 1)}
					initial="hidden"
					whileInView="show"
					className="flex flex-col justify-between gap-10 items-center h-full z-[2] rounded-xl p-5 relative bg-image xl:mt-5"
				>
					<div className="isolate">
						<div className="mb-5">
							<FaQuoteLeft className="size-10" />
						</div>
						<p className="text-4xl xl:text-5xl xl:leading-[2.9rem] font-semibold m-5">
							All of <span className="text-primary">physics</span> is either impossible or trivial. It is impossible
							until you understand it, and then it becomes trivial.
						</p>
						<div className="flex justify-between my-5">
							<p className="text-right italic text-lg text-gray-400">
								Ernest Rutherford
							</p>
							<FaQuoteRight className="size-10" />
						</div>
						<p className="m-5 text-xl">
							Pomożemy Ci zrozumieć fizykę, tak, aby <br />{" "}
							<span className="text-primary italic">impossible</span>{" "}
							<span className="text-gray-500">(niemożliwe)</span> stało się{" "}
							<br />
							<span className="text-primary italic">trivial</span>{" "}
							<span className="text-gray-500">(oczywiste)</span>.
						</p>
					</div>
				</motion.div>
				<motion.div
					variants={fadeIn("up", "spring", 0.5, 1)}
					initial="hidden"
					whileInView="show"
					className="xl:col-span-2 h-full hidden lg:flex items-center justify-center"
				>
					<img
						className="rounded-xl border-2 border-secondary"
						src="./hero.png"
						alt=""
					/>
				</motion.div>
			</div>
		</div>
	);
}
