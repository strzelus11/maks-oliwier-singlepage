import AboutComponent from "@/components/AboutComponent";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Insight Hunters | O nas</title>
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
				<meta property="og:url" content="https://insight-hunters.pl/" />
			</Head>
			<div className="flex flex-col overflow-y-scroll h-screen">
				<div className="mt-[70px] lg:mt-[80px]">
					<AboutComponent />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}
