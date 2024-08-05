export default function TabButton({ text, Icon, isActive, onClick }) {
	return (
        <div
            onClick={onClick}
			className={`cursor-pointer bg-secondary h-full rounded-md w-full flex gap-3 justify-center items-center border-2 border-gray-500 transition delay-150 duration-300 hover:-translate-y-1 hover:border-primary text-white text-xl ${
				isActive && "border-primary -translate-y-1"
			}`}
		>
			<Icon className="text-primary size-6" />
			<span className="hidden lg:flex">{text}</span>
		</div>
	);
}
