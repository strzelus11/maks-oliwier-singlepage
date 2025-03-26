import Footer from "@/components/Footer";
import Head from "next/head";

export default function PolicyPage() {
	return (
		<>
			<Head>
				<title>Insight Hunters | Polityka prywatności</title>
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
			<div className="flex flex-col overflow-y-scroll h-screen pt-10">
				<h1 className="text-3xl font-semibold text-gray-800 mb-6">
					Polityka prywatności
				</h1>
				<div className="flex-grow text-gray-400 text-lg space-y-4 p-5 bg-secondary rounded-xl mx-5 mb-10">
					<p>
						Dane, są zbierane wtedy i tylko wtedy, gdy użytkownik się z nami
						kontaktuje, czy to aby zadać pytanie, czy przez zapisywanie się na
						korepetycje
					</p>
					<ol className="list-decimal ml-6 space-y-3">
						<li>
							<p>Jakie dane zbieramy:</p>
							<ul className="list-disc ml-6 mt-2 space-y-2">
								<li>Imiona i nazwiska (podawane przez użytkownika)</li>
								<li>Adresy email (podawane przez użytkownika)</li>
								<li>Powód zapisu na zajęcia oraz typ zajęć</li>
							</ul>
						</li>
						<li>
							<p>Dlaczego zbieramy dane:</p>
							<ul className="list-disc ml-6 mt-2 space-y-2">
								<li>Adresy email niezbędne są do komunikacji z klientem</li>
								<li>
									Wiedza o imionach i nazwiskach usprawnia konwersacje mailową z
									klientem, ale także komunikację podczas zajęć online oraz
									rejestr.
								</li>
							</ul>
						</li>
						<li>
							Dane są przechowywane w naszym systemie, aby prowadzić zapisy osób
							na poszczególne zajęcia.
						</li>
						<li>
							Nie udostępniamy danych innym firmom ani osobom. Są widoczne tylko
							dla nas i przekazywane są pomiędzy pracownikami naszej
							działalności.
						</li>
					</ol>
				</div>
				<Footer />
			</div>
		</>
	);
}
