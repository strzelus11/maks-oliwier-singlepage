import OfferCard from "./OfferCard";
import SectionLayout from "./SectionLayout";

export default function Offer() {
    return (
			<SectionLayout
				id="link5"
				title="Oferta"
				subtitle="Wszystkie zajęcia online"
			>
				<div className="flex flex-col lg:grid grid-cols-4 gap-10 w-[80%] lg:w-full">
					<OfferCard
						title="Korepetycje z fizyki"
						subtitle="(poziom liceum i studiów)"
						price={100}
						time="h"
						group={false}
						index={0}
					/>
					<OfferCard
						title="Korepetycje z matematyki"
						subtitle="(poziom liceum i studiów)"
						price={100}
						time="h"
						group={false}
						index={1}
					/>
					<OfferCard
						title="Koło olimpijskie z fizyki"
						price={50}
						time="zajęcia"
						group={true}
						index={2}
					/>
					<OfferCard
						title="Korepetycje z programowania"
						price={100}
						time="h"
						group={false}
						index={3}
					/>
				</div>
			</SectionLayout>
		);
}
