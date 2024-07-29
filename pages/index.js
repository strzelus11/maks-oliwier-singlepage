import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Olimpic from "@/components/Olimpic";
import Tutoring from "@/components/Tutoring";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Header />
			<div className="mt-[70px] lg:mt-[80px]">
				<Hero />
			</div>
			<div>
                <Tutoring />
            </div>
			<div>
                <Olimpic />
            </div>
			<div>
                <Offer />
            </div>
		</div>
	);
}
