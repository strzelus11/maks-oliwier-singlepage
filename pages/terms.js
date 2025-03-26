import Footer from "@/components/Footer";
import Head from "next/head";

export default function TermsPage() {
	return (
		<>
			<Head>
				<title>Insight Hunters | Zasady użytkowania</title>
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
					Zasady użytkowania
				</h1>
				<div className="flex-grow text-gray-400 text-lg space-y-4 p-5 bg-secondary rounded-xl mx-5 mb-10">
					<ul className="list-disc ml-6 space-y-3">
						<li>
							Witamy na insighthunters.vercel.app. Korzystając z naszej strony,
							zgadzasz się na niniejszy Regulamin.
						</li>
						<li>
							Twój dostęp i korzystanie ze strony są uzależnione od
							zaakceptowania niniejszych warunków. Kontynuacja korzystania
							oznacza zgodę.
						</li>
						<li>
							Zastrzegamy sobie prawo do modyfikacji niniejszych warunków w
							dowolnym czasie. Zmiany będą widoczne pod adresem
							insighthunters.vercel.app/terms
						</li>
						<li>
							Zgadzasz się nie angażować w zabronione działania, w tym między
							innymi:
							<ul className="list-disc ml-6 space-y-3">
								<li>Działania niezgodne z prawem</li>
								<li>Nękanie lub nadużycia</li>
								<li>Spamowanie</li>
							</ul>
						</li>
						<li>
							Treści na stronie są własnością działalności &quot;Insight
							Hunters&quot; lub jej użytkowników. Możesz korzystać z treści
							wyłącznie do celów osobistych, niekomercyjnych.
						</li>
						<li>
							Wszystkie treści, znaki towarowe i inne prawa własności
							intelektualnej są własnością działalności &quot;Insight
							Hunters&quot; lub jej licencjodawców.
						</li>
						<li>
							Prosimy o zapoznanie się z naszą Polityką Prywatności, która jest
							częścią niniejszego Regulaminu, aby zrozumieć, jak zbieramy i
							wykorzystujemy Twoje dane.
						</li>
						<li>
							Nasza strona może zawierać linki do stron internetowych osób
							trzecich. Nie ponosimy odpowiedzialności za treści ani praktyki
							tych stron.
						</li>
						<li>
							Nie ponosimy odpowiedzialności za jakiekolwiek szkody wynikające z
							korzystania ze strony.
						</li>
						<li>
							W przypadku pytań lub wątpliwości dotyczących niniejszego
							Regulaminu prosimy o kontakt przez naszą stronę (napisz do nas)
						</li>
					</ul>
				</div>
				<Footer />
			</div>
		</>
	);
}
