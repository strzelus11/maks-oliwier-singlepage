import { useState } from "react";
import SectionLayout from "./SectionLayout";
import TabButton from "./TabButton";
import { SiPython } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import SVG from "./SVG";

const tabContent = {
	Python: [
		"Python jest jednym z najpopularniejszych i najczęściej wykorzystywanych języków programowania. Znajduje swoje zastosowanie m. in. w programowaniu webowym, analizie danych, cyberbezpieczeństwie oraz uczeniu maszynowym.",
		"Korepetycje tego języka obejmują zarówno zakres podstawowy, jaki i zaawansowany.",
		"Nauczamy przede wszystkim takich zagadnień jak podstawowe funkcjonalności w Python, różne paradygmaty (np. programowanie obiektowe i funkcyjne), oraz posługiwanie się modułami wbudowanymi w język (sys, os, math itp.).",
		"Jeżeli chcesz zacząć naukę programowania i nie wiesz jak zacząć, to będziemy dla Ciebie wsparciem.",
	],
	"Data Analysis": [
		"Nie możesz poradzić sobie ze statystyką na studiach?, albo potrzebujesz jej znajomości w pracy? Pomożemy Ci! Analiza danych jest bardzo przydatną i opłacaną umiejętnością. Duże korporacje opierają część swojego sukcesu na odpowiednich analizach. Inwestorzy przeprowadzają analizy techniczne, które pozwalają im podejmować lepsze decyzje. Ilość danych na świecie nieustannie rośnie, a im więcej ich jest, tym więcej informacji zawierają. Naucz się  zarządzać tymi danymi!",
		"Istnieje wiele narzędzi do analizy danych. My nauczymy Cię programistycznego podejścia używając języka Python i jego popularnych bibliotek Pandas, Numpy i Matplotlib.",
	],
	"Scikit-Learn": [
		"Czy zastanawiałeś się kiedyś jaki sekret stoi za działaniem sztucznej inteligencji? Co to właściwie znaczy, że program jest inteligentny? Okazuję się, że odpowiedź na te pytania nie jest wcale taka trudna. Jeśli chciałbyś stworzyć swoją pierwszą sztuczną inteligencję lub udoskonalić umiejętności z analizy danych, to jesteśmy gotowi aby towarzyszyć Ci w tej interesującej przygodzie",
		"Oferujemy naukę technik i narzędzi w zakresie popularnej biblioteki Python Scikit-learn, takich jak regresja liniowa, logistyczna, L1, L2, L1L2 oraz wiele metod klasyfikacji danych. Dodatkowo nauczysz się również przygotowywać i organizować zestawy danych do treningu modeli.",
	],
	TensorFlow: [
		"TensorFlow to jedna z najpopularniejszych bibliotek do tworzenia zaawansowanych modeli AI. Wykorzystywana przez największe firmy technologiczne na świecie, daje niesamowite możliwości w dziedzinie analizy danych, przetwarzania obrazów, rozpoznawania mowy i wielu innych. Nasze korepetycje obejmują podstawowe techniki pracy z Tensorflow.",
		"Nauczysz się u nas jak przygotowywać zestawy danych to treningu sieci neuronowych, jak tworzyć różne typy tych sieci (konwolucyjne, rekurencyjne itp.) oraz jak je optymalizować aby osiągnąć najpelsze rezultaty. Pokażemy Ci również ich konkretne zastosowania pracując nad standardowymi i  praktycznymi przykładami z życia codziennego.",
		"Dodatkowo jeżeli jesteś zainteresowany detalami działania tych modeli, zapoznamy Cię z matematyką, która stoi za magią sieci neuronowych.",
	],
};

export default function Coding() {
	const [activeTab, setActiveTab] = useState("Python");

	return (
		<SectionLayout
			id="Programowanie"
			title="Programowanie"
			subtitle="Technologie, których nauczamy"
		>
			<div className="w-full mt-5 sm:mt-0">
				<div className="bg-black h-[50px] w-full flex items-center justify-around gap-2 rounded-t-xl">
					{Object.keys(tabContent).map((tab) => (
						<TabButton
							key={tab}
							text={tab}
							Icon={
								tab === "Python"
									? SiPython
									: tab === "Data Analysis"
									? FaDatabase
									: tab === "Scikit-Learn"
									? SiScikitlearn
									: SiTensorflow
							}
							isActive={activeTab === tab}
							onClick={() => setActiveTab(tab)}
						/>
					))}
				</div>
				<div className="text-lg bg-secondary rounded-xl leading-6 relative mt-2 p-5 text-gray-400 min-h-[25rem]">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.3 }}
						>
							{tabContent[activeTab].map((content, index) => (
								<div
									key={index}
									className="text-gray-300 text-justify flex gap-3 items-start mb-4"
								>
									<SVG className="size-7 text-primary" />
									<div className="w-full">{content}</div>
								</div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</SectionLayout>
	);
}
