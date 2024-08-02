import PersonComponent from "./PersonComponent";
import SectionLayout from "./SectionLayout";

const maksAchiev = [
	"Półfinalista Ogólnopolskiej Olimpiady Fizycznej 2022/2023 (etap doświadczalny)",
	"Półfinalista Ogólnopolskiej Olimpiady Fizycznej 2023/2024 (etap teoretyczny)",
];

const oliwierAchiev = [
	"1. klasa gimnazjum (2016/2017) – laureat wojewódzkiego konkursu z matematyki, finalista wojewódzkiego konkursu z fizyki",
	"2. klasa gimnazjum (2017/2018) – laureat wojewódzkiego konkursu z fizyki, laureat III stopnia Olimpiady Matematycznej Juniorów, pierwsza nagroda w Wielkopolskiej Lidze Matematycznej, pierwsze miejsce w Wielkopolskiej Lidze Fizycznej",
	"3. klasa gimnazjum (2018/2019) – laureat Olimpiady Fizycznej (6. miejsce), brązowy medalista Europejskiej Olimpiady Fizycznej w Rydze, 1. miejsce w konkursie fizycznym Lwiątko, druga nagroda w Wielkopolskiej Lidze Matematycznej, współautor zadań do Wielkopolskiej Ligi Fizycznej, 5. miejsce w konkursie Physics Cup",
	"1. klasa liceum (2019/2020) – finalista Olimpiady Fizycznej (finał się nie odbył ze względu na Covid19), półfinalista Turnieju Młodych Fizyków, 2. miejsce w konkursie fizycznym Lwiątko, pierwsza nagroda w Wielkopolskiej Lidze Matematycznej",
	"3. klasa liceum (2020/2021) – finalista Olimpiady Matematycznej, półfinalista Turnieju Młodych Fizyków, pierwsza nagroda w Wielkopolskiej Lidze Matematycznej, 2. miejsce w konkursie Physics Cup",
	"1. rok studiów (kierunek fizyka, Uniwersytet im. Adama Mickiewicza w Poznaniu) (2021/2022) – indywidualny projekt: badania nad fizyką windsurfingu na hydroskrzydłach",
	"2. rok studiów (2022/2023) – członek jury w Wielkopolskiej Superlidze Liceów z fizyki i współautor zadań, zdobycie pierwszej nagrody i wyróżnienia w międzynarodowym konkursie Mandles Prize for Hydrofoil Excellence za artykuły z badań na temat windsurfingu na hydroskrzydłach",
	"3. rok studiów (2023/2024) – praca nad licencjatem z silnie skorelowanych układów kwantowych wielu ciał",
];

const links = [
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

export default function AboutComponent() {
	return (
		<SectionLayout title="O nas">
			<div className="flex flex-col gap-10">
				<PersonComponent
					name="Oliwier Urbański"
                    text="Fizyka jest moją największą pasją. Interesuję się fizyką statystyczną, kwantowymi układami wielu ciał oraz fizyką żeglarstwa. W wolnych chwilach trenuję na klasie Formuła Windsurfing Foil."
                    links={links}
					achievements={oliwierAchiev}
				/>
				<PersonComponent
					name="Maksymilian Strzelecki"
					text="Fizyka i matematyka zawsze były dla mnie bardzo ciekawymi naukami. Wiele czasu spędziłem rozwiązując ciekawe problemy z zakresu różnych dyscyplin tych nauk. Dodatkowo połączyłem tę wiedzę i doświadczenie z moją inną pasją jaką jest programowanie, poprzez tworzenie symulacji komputerowych i narzędzi dla deweloperów. W liceum przekazywałem wiedzę innym uczniom organizując wykłady i zajęcia wyrównawcze. Obecnie studiuję na Politechnice Poznańskiej."
					achievements={maksAchiev}
				/>
			</div>
		</SectionLayout>
	);
}
