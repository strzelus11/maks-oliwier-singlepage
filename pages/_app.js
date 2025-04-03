import "katex/dist/katex.min.css";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { Exo_2 } from "next/font/google";
import { Toaster } from "react-hot-toast";
import i18n from "../i18n";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

const font = Exo_2({ subsets: ["latin"] });

function App({ Component, pageProps }) {
	return (
		<div className={font.className}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Dołącz do Insight Hunters, aby uzyskać profesjonalne korepetycje z przedmiotów ścisłych. Sesje online z fizyki, matematyki i programowania. Podnieś swoje wyniki już dziś!"
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
					content="Dołącz do Insight Hunters, aby uzyskać profesjonalne korepetycje z przedmiotów ścisłych. Sesje online z fizyki, matematyki i programowania. Podnieś swoje wyniki już dziś!"
				/>
				<meta
					property="og:image"
					content="https://strzelus-next-ecommerce.s3.us-east-1.amazonaws.com/logo.png"
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
					content="Dołącz do Insight Hunters, aby uzyskać profesjonalne korepetycje z przedmiotów ścisłych. Sesje online z fizyki, matematyki i programowania. Podnieś swoje wyniki już dziś!"
				/>
				<meta
					name="twitter:image"
					content="https://strzelus-next-ecommerce.s3.us-east-1.amazonaws.com/logo.png"
				/>

				<meta name="author" content="Insight Hunters" />
				<link rel="icon" href="/file.png" type="image/png" />
				<link rel="apple-touch-icon" href="/file.png" />
				{/* <link rel="icon" href="/logo.png" type="image/png" />
				<link rel="apple-touch-icon" href="/logo.png" /> */}
			</Head>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					duration: 3000,
					style: {
						borderRadius: "15px",
						fontSize: "20px",
						padding: "8px 16px",
						display: "inline-flex",
						justifyContent: "space-between",
						alignItems: "center",
						whiteSpace: "nowrap",
					},
				}}
			/>
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
		</div>
	);
}

export default appWithTranslation(App);
