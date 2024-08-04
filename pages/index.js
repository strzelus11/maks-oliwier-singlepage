import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Olimpic from "@/components/Olimpic";
import Tutoring from "@/components/Tutoring";

export default function Home() {
	return (
		<div className="flex flex-col overflow-y-scroll full mt-[70px] lg:mt-[80px] snap-y snap-mandatory scroll-smooth">
			<div>
                <div className="min-h-screen snap-start lg:snap-center">
                    <Hero />
                </div>
                <div className="min-h-screen snap-start lg:snap-center">
                    <Tutoring />
                </div>
                <div className="min-h-screen snap-start lg:snap-center">
                    <Olimpic />
                </div>
                <div className="min-h-screen snap-start lg:snap-center">
                    <Offer />
                </div>
                <div className="snap-start lg:snap-center">
                    <Footer />
                </div>
            </div>
		</div>
	);
}
