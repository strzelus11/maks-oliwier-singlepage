import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="w-full border-t border-primary h-[100px] bg-secondary/80 text-white flex justify-around items-center">
			<div className="flex-col">
				<div>&copy; Designed and developed by Jakub Strzelecki</div>
				<Link href="/policy" className="text-sm text-gray-400 underline transition delay-150 duration-300 decoration-secondary/80 hover:decoration-gray-400">
					Privacy policy
				</Link>
			</div>
			<div className="flex gap-3 text-gray-400">
				<Link href="">
					<FaFacebookSquare className="size-7 hover:text-primary transition-all delay-150 duration-300 hover:scale-105" />
				</Link>
				<Link href="">
					<FaInstagram className="size-7 hover:text-primary transition-all delay-150 duration-300 hover:scale-105" />
				</Link>
				<Link href="">
					<FaYoutube className="size-7 hover:text-primary transition-all delay-150 duration-300 hover:scale-105" />
				</Link>
			</div>
		</div>
	);
}
