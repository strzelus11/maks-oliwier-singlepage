import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";

export default function TermsPage() {
	return (
		<SectionLayout title="Regulamin">
			<div className="text-gray-400 text-lg space-y-4 p-5 bg-secondary rounded-xl">
				Dane, są zbierane wtedy i tylko wtedy, gdy użytkownik się z nami
				kontaktuje, czy to aby zadać pytanie, czy przez zapisywanie się na
				korepetycje
				<ul className="list-disc ml-6 space-y-3">
					<li>
						Witamy na [adres strony]. Korzystając z naszej strony, zgadzasz się
						na niniejszy Regulamin.
					</li>
					<li>
						Twój dostęp i korzystanie ze strony są uzależnione od zaakceptowania
						niniejszych warunków. Kontynuacja korzystania oznacza akceptację
						wszelkich zmian.
					</li>
					<li>
						Zastrzegamy sobie prawo do modyfikacji niniejszych warunków w
						dowolnym czasie. Zmiany będą widoczne pod obecnym adresem
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
						Treści na stronie są własnością [Nazwa Twojej Strony Internetowej]
						lub jej użytkowników. Możesz korzystać z treści wyłącznie do celów
						osobistych, niekomercyjnych.
					</li>
					<li>
						Wszystkie treści, znaki towarowe i inne prawa własności
						intelektualnej są własnością [Nazwa Twojej Strony Internetowej] lub
						jej licencjodawców.
					</li>
					<li>
						Prosimy o zapoznanie się z naszą Polityką Prywatności, która jest
						częścią niniejszego Regulaminu, aby zrozumieć, jak zbieramy i
						wykorzystujemy Twoje dane.
					</li>
					<li>
						Nasza strona może zawierać linki do stron internetowych osób
						trzecich. Nie ponosimy odpowiedzialności za treści ani praktyki tych
						stron.
					</li>
					<li>
						Strona jest dostarczana "tak jak jest" bez żadnych gwarancji. Nie
						gwarantujemy dokładności ani kompletności informacji.
					</li>
					<li>
						Nie ponosimy odpowiedzialności za jakiekolwiek szkody wynikające z
						korzystania ze strony, w zakresie dozwolonym przez prawo.
					</li>
					<li>
						W przypadku pytań lub wątpliwości dotyczących niniejszego Regulaminu
						prosimy o kontakt przez naszą stronę (napisz do nas)
					</li>
				</ul>
			</div>
		</SectionLayout>
	);
}
