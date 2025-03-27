import AboutComponent from "@/components/AboutComponent";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Insight Hunters | O nas</title>
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
			<div className="flex flex-col min-h-[100vh]">
				<div className="pt-[70px] lg:pt-[80px]">
					<AboutComponent />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}
