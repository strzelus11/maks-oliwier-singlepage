export default function AboutCard() {
	return (
		<div className="box flex flex-col items-center relative">
			<div className="rounded-full flex items-center justify-center size-[150px] absolute -top-[80px] p-5 bg-secondary">
				<img
					className="w-full h-full rounded-full object-cover"
					src="./image.JPG"
					alt=""
				/>
			</div>
			<h2 className="mt-14 text-2xl">Maksymilian Strzelecki</h2>
			<div className="text-justify text-gray-300">
				Fizyka jest moją największą pasją. Interesuję się fizyką statystyczną,
				kwantowymi układami wielu ciał oraz fizyką żeglarstwa. W wolnych
				chwilach trenuję na klasie Formuła Windsurfing Foil
			</div>
		</div>
	);
}
