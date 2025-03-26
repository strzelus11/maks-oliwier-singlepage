import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="w-full border-t border-primary h-[110px] lg:h-[80px] bg-secondary/80 text-white flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-2">
			<div className="flex-col justify-center">
				<div className="flex justify-center lg:justify-start gap-5">
					<Link
						href="/policy"
						className="text-sm text-gray-400 underline transition delay-150 duration-300 decoration-secondary/80 hover:decoration-gray-400"
					>
						Polityka prywatności
					</Link>
					<Link
						href="/terms"
						className="text-sm text-gray-400 underline transition delay-150 duration-300 decoration-secondary/80 hover:decoration-gray-400"
					>
						Zasady użytkowania
					</Link>
				</div>
				<div className="text-center lg:text-left">
					&copy; Designed and developed by Jakub Strzelecki
				</div>
			</div>
			<div className="flex pb-3 lg:pb-0 gap-3 text-gray-400 items-center justify-center">
				<Link
					href="https://www.facebook.com/people/Insight-Hunters/61564570392955"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook className="size-7 hover:text-primary transition-all delay-150 duration-300 hover:scale-105" />
				</Link>
				<Link
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram className="size-7 hover:text-primary transition-all delay-150 duration-300 hover:scale-105" />
				</Link>
				<Link
					href="https://www.youtube.com/@InsightHunters"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaYoutube className="size-7 hover:text-primary transition-all delay-150 duration-300 hover:scale-105" />
				</Link>
			</div>
		</div>
	);
}
