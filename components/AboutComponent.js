import PersonComponent from "./PersonComponent";
import SectionLayout from "./SectionLayout";

const maksAchiev = [
	"Półfinalista Ogólnopolskiej Olimpiady Fizycznej 2022/2023 (etap doświadczalny)",
	"Półfinalista Ogólnopolskiej Olimpiady Fizycznej 2023/2024 (etap teoretyczny)",
	"Prolog Programming Certificate 2025",
	"Harvard Introduction to artificial intelligence with Python (free mode)",
	"Google Search Ads Certificate",
	"Google Analytics Certificate",
	"Praca jako representant developera w firmie Cordia 2024",
	"Praca jako nauczyciel w firmie edukacyjnej Ferajna 2024"
];

const maksLinks = [
	{
		url: "https://www.fizyka.amu.edu.pl/aktualnosci/olimpiada-fizyczna/komunikat-nr-3-72.-olimpiada-fizyczna",
		text: "Kwalifikacja do drugiej części półfinału",
	},
	{
		url: "https://www.fizyka.amu.edu.pl/aktualnosci/olimpiada-fizyczna/komunikat-nr-4-72.-of",
		text: "Zdjęcia z półfinału",
	},
];



const oliwierAchiev = [
	"1. klasa gimnazjum (2016/2017) – laureat wojewódzkiego konkursu z matematyki, finalista wojewódzkiego konkursu z fizyki",
	"2. klasa gimnazjum (2017/2018) – laureat wojewódzkiego konkursu z fizyki, laureat III stopnia Olimpiady Matematycznej Juniorów, pierwsza nagroda w Wielkopolskiej Lidze Matematycznej, pierwsze miejsce w Wielkopolskiej Lidze Fizycznej",
	"3. klasa gimnazjum (2018/2019) – laureat Olimpiady Fizycznej (6. miejsce), brązowy medalista Europejskiej Olimpiady Fizycznej w Rydze, 1. miejsce w konkursie fizycznym Lwiątko, druga nagroda w Wielkopolskiej Lidze Matematycznej, współautor zadań do Wielkopolskiej Ligi Fizycznej, 5. miejsce w konkursie Physics Cup",
	"1. klasa liceum (2019/2020) – finalista Olimpiady Fizycznej (finał się nie odbył ze względu na Covid19), półfinalista Turnieju Młodych Fizyków, 2. miejsce w konkursie fizycznym Lwiątko, pierwsza nagroda w Wielkopolskiej Lidze Matematycznej",
	"3. klasa liceum (2020/2021) – finalista Olimpiady Matematycznej, półfinalista Turnieju Młodych Fizyków, pierwsza nagroda w Wielkopolskiej Lidze Matematycznej, 2. miejsce w konkursie Physics Cup",
	"1. rok studiów (kierunek fizyka, Uniwersytet im. Adama Mickiewicza w Poznaniu) (2021/2022) – indywidualny projekt: badania nad fizyką windsurfingu na hydroskrzydłach",
	"2. rok studiów (2022/2023) – członek jury w Wielkopolskiej Superlidze Liceów z fizyki i współautor zadań, zdobycie pierwszej nagrody i wyróżnienia w międzynarodowym konkursie Mandles Prize for Hydrofoil Excellence za artykuły z badań na temat windsurfingu na hydroskrzydłach",
	"3. rok studiów (2023/2024) – obroniony licencjat na temat zastosowania metody wariacyjnej do kwantowych układów wielu ciał",
];

const oliwierLinks = [
	{
		url: "http://youtube.com/watch?v=PyaIPvBkmwE&ab_channel=InternationalWindsurfingAssociation",
		text: "Formuła Windsurfing Foil",
	},
	{
		url: "https://www.youtube.com/watch?v=VBRi9CZJd8Q&t=2740s&ab_channel=CSW2030",
		text: "Film z rozwiązywaniem zadań na żywo",
	},
	{
		url: "https://foils.org/mandles-prize/2023-winner-announcement-and-papers/",
		text: "Artykuły z badań na temat windsurfingu na hydroskrzydłach",
	},
];

const kubaLinks = [
	{
		url: "https://www.insighthunters.pl/",
		text: "Strona firmy Insight Hunters",
	},
	{
		url: "https://olesinskiego.com/",
		text: "Strona portfolio Jakub Olesiński",
	},
	{
		url: "https://sqm-audits.vercel.app/",
		text: "Strona SQM",
	},
	{
		url: "https://www.linkedin.com/in/jakub-strzelecki-8bb794276/",
		text: "Profil LinkedIn",
	},
];

export default function AboutComponent() {
	return (
		<div className="p-3 sm:p-10 flex justify-center">
			<div className="flex flex-col gap-10 max-w-4xl">
				<PersonComponent
					name="Maksymilian Strzelecki"
					image="/images/maks.jpg"
					text="Fizyka i matematyka zawsze były dla mnie bardzo ciekawymi naukami. Wiele czasu spędziłem rozwiązując problemy z zakresu różnych dyscyplin tych dziedzin. Dodatkowo połączyłem tę wiedzę i doświadczenie z moją inną pasją, jaką jest programowanie, poprzez tworzenie symulacji komputerowych, analizując dane oraz tworząc technologie AI wykorzystując sieci neuronowe. Obecnie studiuję informatykę na Politechnice Poznańskiej, gdzie kontynuuje swoją naukową przygodę."
					links={maksLinks}
					achievements={maksAchiev}
				/>
				<PersonComponent
					name="Oliwier Urbański"
					image="/images/oliwier.jpg"
					text="Fizyka jest moją największą pasją. Interesuję się fizyką statystyczną, kwantowymi układami wielu ciał oraz fizyką żeglarstwa. W wolnych chwilach trenuję na klasie Formuła Windsurfing Foil."
					links={oliwierLinks}
					achievements={oliwierAchiev}
				/>
				<PersonComponent
					name="Jakub Strzelecki"
					image="/images/kuba.jpeg"
					text="Jestem full stack developerem z doświadczeniem w projektowaniu i tworzeniu nowoczesnych aplikacji webowych, a także IT Managerem w firmie Woodpecker Europe. Na co dzień odpowiadam za rozwój rozwiązań wspierających procesy sprzedażowe i logistyczne w branży maszyn leśnych. Łączę kompetencje techniczne z umiejętnościami organizacyjnymi, koordynując wdrażanie narzędzi IT, automatyzację procesów oraz optymalizację infrastruktury cyfrowej w firmie. Stale rozwijam się w obszarze architektury systemów, zarządzania projektami IT oraz najnowszych trendów web developmentu. Interesuje mnie zarówno jakość kodu, jak i realna wartość biznesowa rozwiązań, które tworzę."
					links={kubaLinks}
				/>
			</div>
		</div>
	);
}
