import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Olimpic from "@/components/Olimpic";
import Tutoring from "@/components/Tutoring";

export default function Home() {
	return (
		<div className="flex flex-col mt-[70px] lg:mt-[80px] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
			<Header />
			<div className="flex-1">
				<div className="min-h-screen snap-center">
					<Hero />
				</div>
				<div className="min-h-screen snap-center">
					<Tutoring />
				</div>
				<div className="min-h-screen snap-center">
					<Olimpic />
				</div>
				<div className="min-h-screen snap-center">
					<Offer />
				</div>
				<div className="snap-center lg:mb-[80px]">
					<Footer />
				</div>
			</div>
		</div>
	);
}
