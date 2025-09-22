import Coding from "@/components/Coding";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Olimpic from "@/components/Olimpic";
import Tutoring from "@/components/Tutoring";
import WebDev from "@/components/WebDev";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Insight Hunters</title>
			</Head>
			<div className="flex flex-col full mt-[70px] lg:mt-[80px]">
				<div>
					<div className="screen">
						<Hero />
					</div>
					<div className="screen">
						<Tutoring />
					</div>
					<div className="screen">
						<Coding />
					</div>
					<div className="screen">
						<WebDev />
					</div>
					<div className="screen">
						<Offer />
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}
