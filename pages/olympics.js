import Head from "next/head";
import Footer from "@/components/Footer";
import Olimpic from "@/components/Olimpic";
import VideoEmbed from "@/components/VideoComponent";
import Title from "@/components/OlimpicTitle";
import PersonComponent from "@/components/PersonComponent";
import { fadeIn } from "@/utils/motion";

export default function Home() {
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

  return (
    <>
      <Head>
        <title>Insight Hunters Olimpic</title>
      </Head>

      <div className="flex flex-col items-center w-full">
        {/* --- Main Title --- */}
        <div className="mt-[200px] mb-10 text-center w-full px-4">
          <Title
            title="Witajcie w kole olimpijskim z fizyki!"
            variants={fadeIn("down", "spring", 0, 1)}
            className="text-3xl lg:text-5xl"
          />
        </div>

        {/* --- Video --- */}
        <div className="mb-16 w-full flex justify-center">
        <VideoEmbed
          videoId="TKeGlIpBehQ"
          maxWidth="1000px"   // to ustali maksymalną szerokość
          borderColor="#d0a933"
          borderWidth="6px"
          padding="10px"
        />
      </div>

        {/* --- Olimpic section --- */}
        <div className="mb-16 w-full px-4 max-w-[1200px]">
          <Olimpic />
        </div>

        {/* --- Person Title --- */}
        <div className="mb-8 w-full text-center px-4">
          <Title
            title="Prowadzący"
            variants={fadeIn("down", "spring", 0, 1)}
            className="text-3xl lg:text-5xl"
          />
        </div>

        {/* --- Person Component --- */}
        <div className="flex justify-center w-full max-w-[1200px] px-4 mb-16">
          <PersonComponent
            name="Oliwier Urbański"
            image="/images/oliwier.jpg"
            text="Fizyka jest moją największą pasją. Interesuję się fizyką statystyczną, kwantowymi układami wielu ciał oraz fizyką żeglarstwa. W wolnych chwilach trenuję na klasie Formuła Windsurfing Foil."
            achievements={oliwierAchiev}
            links={oliwierLinks}
          />
        </div>

        {/* --- Footer --- */}
        <Footer />
      </div>
    </>
  );
}
