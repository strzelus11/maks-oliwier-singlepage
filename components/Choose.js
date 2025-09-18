import OfferCard from "./OfferCard";
import SectionLayout from "./SectionLayout";

export default function Offer() {
    return (
			<SectionLayout
				id="link5"
				title="Wybierz usługę"
			>
				<div className="flex flex-col lg:grid grid-cols-5 gap-5 w-[80%] lg:w-full mb-10 sm:mb-0">
					<OfferCard
						title="Fizyka"
						subtitle="(poziom liceum i studiów)"
						price={100}
						time="h"
						group={false}
						index={0}
					/>
					<OfferCard
						title="Matematyka"
						subtitle="(poziom liceum i studiów)"
						price={100}
						time="h"
						group={false}
						index={1}
					/>
					<OfferCard
						title="Data Science"
						price={100}
						time="h"
						group={false}
						index={2}
					/>
					<OfferCard
						title="Web Development"
						price={120}
						time="h"
						group={false}
						index={3}
					/>
					<OfferCard
						title="Koło olimpijskie z fizyki"
						price={50}
						time="zajęcia"
						group={true}
						index={4}
					/>
				</div>
			</SectionLayout>
		);
}
