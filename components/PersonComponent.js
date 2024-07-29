import SVG from "./SVG";

export default function PersonComponent({ name, text, achievements }) {
	return (
		<div className="bg-secondary p-5 rounded-xl">
			<div className="flex items-center flex-col sm:flex-row gap-10 sm:items-start">
				<div className="max-w-[15rem] p-2 bg-gray-500 rounded-xl overflow-hidden">
					<img
						className="rounded-xl object-cover w-full h-full"
						src="./image.JPG"
						alt=""
					/>
				</div>
				<div>
					<h2 className="text-white text-3xl">{name}</h2>
					<p className="text-gray-400 text-lg text-justify">{text}</p>
					<h3 className="text-xl text-white my-5">Osiągnięcia:</h3>
					<div className="achievements text-gray-400 text-lg">
						{achievements.map((item) => (
							<div className="flex gap-3 items-start mb-2">
								<SVG className="size-7 text-white" />
								<div className="w-full">
									{item}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
