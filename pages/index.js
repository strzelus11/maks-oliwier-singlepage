import Coding from "@/components/Coding";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Olimpic from "@/components/Olimpic";
import Tutoring from "@/components/Tutoring";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Physics</title>
				<link rel="shortcut icon" href="./file.png" type="image/x-icon" />
			</Head>
			<div className="flex flex-col overflow-y-scroll full mt-[70px] lg:mt-[80px] snap-y snap-mandatory scroll-smooth">
				<div>
					<div className="min-h-screen snap-start lg:snap-center">
						<Hero />
					</div>
					<div className="min-h-screen snap-start lg:snap-center">
						<Tutoring />
					</div>
					<div className="min-h-screen snap-start lg:snap-center">
						<Olimpic />
					</div>
					<div className="min-h-screen snap-start lg:snap-center">
						<Coding />
					</div>
					<div className="min-h-screen snap-start lg:snap-center">
						<Offer />
					</div>
					<div className="snap-start lg:snap-center">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}
