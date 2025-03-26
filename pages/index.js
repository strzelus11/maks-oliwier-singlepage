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
				<meta
					name="description"
					content="Zajęcia indywidualne z fizyki, matematyki i programowania. Przygotowanie do matury, olimpiad i rozwój pasji. Online i stacjonarnie."
				/>
				<link rel="icon" href="/file.png" type="image/png" />
				<meta name="robots" content="index, follow" />
				<meta
					name="keywords"
					content="korepetycje, fizyka, matematyka, programowanie, nauka, tutoring, szkolenia"
				/>
				<meta
					property="og:title"
					content="Insight Hunters – Korepetycje i Szkolenia"
				/>
				<meta
					property="og:description"
					content="Profesjonalne korepetycje z fizyki, matematyki i programowania. Online lub stacjonarnie."
				/>
				<meta property="og:url" content="https://insighthunters.pl/" />
			</Head>
			<div className="flex flex-col overflow-y-scroll full mt-[70px] lg:mt-[80px] snap-mandatory scroll-smooth">
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
						<WebDev />
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
