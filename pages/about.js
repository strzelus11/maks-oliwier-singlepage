import AboutComponent from "@/components/AboutComponent";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Insight Hunters | O nas</title>
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
