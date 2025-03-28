import Link from "next/link";
import SVG from "./SVG";
import React from "react";
import Image from "next/image";

export default function PersonComponent({
	name,
	text,
	achievements,
	links,
	image,
}) {
	return (
		<div className="bg-secondary p-5 rounded-xl">
			<div className="flex items-center flex-col sm:flex-row gap-10 sm:items-start">
				<div className="rounded-lg overflow-hidden w-[15rem] h-[20rem] object-center flex-shrink-0">
					<img
						className="rounded-lg object-cover w-full h-full"
						src={image}
						alt=""
					/>
					<Image
						src={image}
						alt="person"
						width={500}
						height={0}
						className="rounded-lg object-cover h-full w-full"
						loading="lazy"
					/>
				</div>
				<div>
					<h2 className="text-white text-3xl">{name}</h2>
					<p className="text-gray-400 text-lg">{text}</p>
					{achievements && (
						<h3 className="text-xl text-white my-5">Osiągnięcia:</h3>
					)}
					<div className="text-gray-400">
						{achievements?.map((item, index) => (
							<div key={index} className="flex gap-3 items-start mb-2">
								<SVG className="size-7 text-primary" />
								<div className="w-full">{item}</div>
							</div>
						))}
					</div>
					{links && (
						<div className="flex flex-col gap-2">
							<h2 className="text-white mt-5">Linki:</h2>
							{links.map((link, index) => (
								<a
									key={index}
									className="text-primary underline decoration-secondary hover:decoration-primary transition-all delay-150 duration-300"
									href={link.url}
									target="_blank"
								>
									{link.text}
								</a>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
