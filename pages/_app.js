import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { Exo_2 } from "@next/font/google";
import { Toaster } from "react-hot-toast";

const font = Exo_2({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<main className={font.className}>
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
			<div className="full mt-[70px] lg:mt-[80px]">
                <Component {...pageProps} />
            </div>
		</main>
	);
}
