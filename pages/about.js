import AboutComponent from "@/components/AboutComponent";
import Header from "@/components/Header";

export default function AboutPage() {
	return (
		<div className="flex flex-col">
			<Header />
			<div className="mt-[70px] lg:mt-[80px]">
				<AboutComponent />
			</div>
		</div>
	);
}
