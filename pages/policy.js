import Footer from "@/components/Footer";
import Head from "next/head";

export default function PolicyPage() {
	return (
		<>
			<Head>
				<title>Insight Hunters | Polityka prywatności</title>
			</Head>
			<div className="flex flex-col min-h-[100vh] pt-[70px] lg:pt-[80px]">
				<h1 className="text-3xl text-white text-center font-semibold my-5">
					Polityka prywatności
				</h1>
				<div className="flex-grow text-gray-300 space-y-4 p-5 bg-secondary rounded-xl mx-5 mb-10">
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
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}
