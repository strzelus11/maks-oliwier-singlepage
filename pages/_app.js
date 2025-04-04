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
                <title>Insight Hunters</title>
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
