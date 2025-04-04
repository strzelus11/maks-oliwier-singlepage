import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
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
				<link rel="icon" href="/file.ico" type="image/ico" />
				<link rel="apple-touch-icon" href="/file.ico" />
			</Head>
			<body className="bg-black">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
