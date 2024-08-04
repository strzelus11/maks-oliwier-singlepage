import AboutComponent from "@/components/AboutComponent";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Physics | O nas</title>
				<link rel="shortcut icon" href="./file.png" type="image/x-icon" />
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
