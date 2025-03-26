import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
	const [openIndex, setOpenIndex] = useState(null);

	const items = [
		{
			title: "Struktura zajęć",
			content:
				"Głównym celem tych zajęć jest przygotowanie do Olimpiady Fizycznej (i oczywiście dostarczenie insightu). Struktura zajęć jest inspirowana kołem olimpijskim z matematyki, na które miałem przyjemność uczęszczać, prowadzonym przez dr Bartłomieja Bzdęgę. Spotkania odbywają się raz w tygodniu i każde z nich składa się z trzech około 40 minutowych części. Pierwsza z nich to wykład dotyczący tematyki zajęć. Będzie on zawierał, obok olimpijskich standardów, sprytne (czasem nowatorskie) techniki rozwiązywania zadań i protipy. Druga część to przedstawienie zestawu zadań i rozwiązywanie ich. Każdy próbuje samodzielnie, ale w każdej chwili można poprosić o wskazówki. Wszystkie zadania mają charakter olimpijski – niektóre pochodzą z minionych olimpiad krajowych lub międzynarodowych, inne z mało znanych zbiorów, a jeszcze inne to nasze autorskie problemy. Ostatnia część zajęć polega na prezentowaniu własnych rozwiązań na forum, dyskutowaniu ich poprawności i pokazaniu alternatyw.",
		},
		{
			title: "Zadania teoretyczne i doświadczalne",
			content:
				"Zajęcia, jako że prowadzone są online, skupiają się głównie na zadaniach teoretycznych. Problemy eksperymentalne są jednak również ważną częścią zawodów, więc zapowiedziane spotkania koła (co kilka tygodni) będą dotyczyć sztuki przeprowadzania doświadczeń na olimpiadzie.",
		},
		{
			title: "Poziom zaawansowania",
			content:
				"Konstrukcja koła jest tak przemyślana, aby była rozwijająca dla uczestników o różnorodnym poziomie zaawansowania. Zapewnia to wyraźna gradacja trudności zadań w zestawach: od tych przeznaczonych dla początkujących, aż po szalone, mogące być wyzwaniem nawet dla prowadzących (na tym polega piękno olimpiady). Każdy uczestnik wybiera te zadania, które uważa za godnego przeciwnika, by potem móc z satysfakcją zaprezentować jego rozwiązanie. Dodatkowo, po zajęciach można zapytać o wyjaśnienie niezrozumiałych kwestii. Z tych powodów, zachęcamy do udziału także uczniów pierwszych klas, a nawet (w przypadku wyjątkowej determinacji) uczniów szkół podstawowych.",
		},
		{
			title: "Kiedy zaczynamy?",
			content:
				"Uruchomienie koła czeka jeszcze na odpowiednią liczbę uczestników. Zainteresowanych prosimy o wysłanie nam wiadomości wyrażającej potencjalną chęć uczestnictwa. Będziemy informowali zgłoszonych o szczegółach mailowo.",
		},
	];

	const handleClick = (index) => {
		setOpenIndex(index === openIndex ? null : index);
	};

	return (
		<div className="mt-5 rounded-xl overflow-hidden border border-primary divide-y divide-primary">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					title={item.title}
					content={item.content}
					isOpen={index === openIndex}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
}
