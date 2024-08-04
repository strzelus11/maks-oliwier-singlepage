import AboutComponent from "@/components/AboutComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
	return (
		<div className="flex flex-col overflow-y-scroll h-screen">
			<div className="mt-[70px] lg:mt-[80px]">
				<AboutComponent />
			</div>
			<div>
                <Footer />
            </div>
		</div>
	);
}
