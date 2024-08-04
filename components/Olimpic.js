import Accordion from "./Accordion";
import SectionLayout from "./SectionLayout";

export default function Olimpic() {
	return (
		<SectionLayout title="O zajęciach olimpijskich" id="Zajęciaolimpijskie">
			<div className="min-h-[60vh]">
				<Accordion />
			</div>
		</SectionLayout>
	);
}
