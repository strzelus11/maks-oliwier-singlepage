import { IoIosSend } from "react-icons/io";

export default function SendButton({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="group btn-outline hover:scale-100 hover:bg-black/30 w-full flex justify-center mt-3"
		>
			Wyślij
			<span className="lg:opacity-0 group-hover:opacity-100 transition-all delay-150 duration-300">
				<IoIosSend className="size-6" />
			</span>
		</button>
	);
}
