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
				<title>Insight Hunters – Profesjonalne korepetycje</title>
				<meta
					name="description"
					content="Dołącz do Insight Hunters, aby uzyskać profesjonalne korepetycje z przedmiotów ścisłych. Sesje online i stacjonarne z fizyki, matematyki i programowania. Podnieś swoje wyniki już dziś!"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://insighthunters.pl/" />

				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Insight Hunters – Profesjonalne korepetycje"
				/>
				<meta
					property="og:description"
					content="Dołącz do Insight Hunters, aby uzyskać profesjonalne korepetycje z przedmiotów ścisłych. Sesje online i stacjonarne z fizyki, matematyki i programowania."
				/>
				<meta
					property="og:image"
					content="https://insighthunters.pl/og-image.jpg"
				/>
				<meta property="og:url" content="https://insighthunters.pl/" />
				<meta property="og:site_name" content="Insight Hunters" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Insight Hunters – Profesjonalne korepetycje"
				/>
				<meta
					name="twitter:description"
					content="Dołącz do Insight Hunters, aby uzyskać profesjonalne korepetycje z przedmiotów ścisłych. Sesje online i stacjonarne z fizyki, matematyki i programowania."
				/>
				<meta
					name="twitter:image"
					content="https://insighthunters.pl/twitter-image.jpg"
				/>

				<meta name="author" content="Insight Hunters" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
						<Olimpic />
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
