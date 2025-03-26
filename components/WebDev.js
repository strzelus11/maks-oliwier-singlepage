import SectionLayout from "./SectionLayout";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion, backInOut } from "framer-motion";
import Image from "next/image";

const techData = [
	{
		name: "Python",
		icon: FaPython,
        image: "python",
		description:
			"Python to język programowania, który łączy prostotę z niezwykłą mocą i elastycznością. W web developmentcie Python jest znany przede wszystkim ze swojej przejrzystości i wysokiej produktywności, co czyni go idealnym wyborem zarówno dla początkujących, jak i zaawansowanych programistów. Na zajęciach pokażę Ci, jak Python pomaga automatyzować procesy, przetwarzać dane i tworzyć solidne aplikacje backendowe, które są szybkie i skalowalne. Nauczysz się, jak działa praca z bazami danych, jak korzystać z narzędzi do testowania aplikacji i jak wdrażać swoje projekty na serwerach. Dzięki Pythonowi poznasz najważniejsze techniki potrzebne do tworzenia nowoczesnych aplikacji internetowych, a także zrozumiesz, dlaczego firmy takie jak Instagram, Spotify czy Dropbox wykorzystują go na co dzień.",
	},
	{
		name: "Django",
		icon: SiDjango,
        image: "django",
		description:
			"Django to potężny framework Pythonowy, który przenosi backendowe programowanie na wyższy poziom. Podczas naszych korepetycji nauczysz się budować złożone aplikacje webowe, które są szybkie, bezpieczne i skalowalne. Dzięki Django zrozumiesz, jak działa struktura MVC (Model-View-Controller), nauczysz się pracy z bazami danych, a także zrozumiesz zasady autoryzacji i uwierzytelniania użytkowników. Po zajęciach będziesz w stanie tworzyć pełnoprawne aplikacje internetowe – od blogów po serwisy e-commerce.",
	},
	{
		name: "HTML",
		icon: FaHtml5,
        image: "html",
		description:
			"HTML to fundament każdej strony internetowej – to on tworzy strukturę, na której opierają się style i interaktywności. Na naszych zajęciach poznasz tajniki tworzenia semantycznych elementów, dzięki którym Twoje strony będą lepiej odbierane zarówno przez użytkowników, jak i wyszukiwarki. Zrozumiesz, jak HTML współpracuje z CSS i JavaScript oraz jak tworzyć dostępne i responsywne układy stron, które doskonale wyglądają na każdym urządzeniu.",
	},
	{
		name: "CSS",
		icon: FaCss3,
        image: "css",
		description:
			"CSS odpowiada za to, jak wyglądają Twoje strony internetowe, a dobrze zaprojektowany interfejs to klucz do przyciągnięcia użytkowników. Na zajęciach pokażę Ci, jak tworzyć piękne, responsywne i animowane layouty, które przyciągają uwagę. Nauczysz się korzystać z Flexboxa, Grida oraz kluczowych technik CSS3. Dzięki CSS będziesz mógł nadać każdej stronie swój unikalny styl – od minimalistycznych projektów, po bardziej złożone i artystyczne układy.",
	},
	{
		name: "JavaScript",
		icon: SiJavascript,
        image: "javascript",
		description:
			"JavaScript dodaje do stron interaktywność, która sprawia, że użytkownicy angażują się w przeglądanie witryny. Na korepetycjach odkryjemy potęgę JavaScriptu w tworzeniu dynamicznych elementów, takich jak animacje, obsługa formularzy czy API. Nauczysz się też, jak działa DOM (Document Object Model), jak manipulować elementami strony i jak budować dynamiczne aplikacje front-endowe. Zrozumiesz zasady asynchroniczności i AJAX, dzięki którym Twoje aplikacje będą błyskawicznie reagować na działania użytkownika.",
	},
	{
		name: "React",
		icon: FaReact,
        image: "react",
		description:
			"React to najpopularniejsza biblioteka do budowy interfejsów użytkownika, która umożliwia tworzenie dynamicznych, interaktywnych i responsywnych aplikacji. Podczas zajęć dowiesz się, jak działają komponenty, stany oraz jak wykorzystać hooki do zarządzania logiką. Wspólnie stworzymy od podstaw interaktywne aplikacje, które będą zbudowane z mniejszych, niezależnych części. Dzięki Reactowi zrozumiesz, jak działa podejście komponentowe i jak pisać kod, który jest modularny, skalowalny i łatwy do utrzymania.",
	},
	{
		name: "Next.js",
		icon: RiNextjsFill,
        image: "next",
		description:
			"Next.js to framework oparty na React, który wnosi zupełnie nowe możliwości do świata frontendu dzięki wsparciu dla serwerowego renderowania i optymalizacji SEO. Na korepetycjach pokażę Ci, jak budować dynamiczne aplikacje SPA (Single Page Applications) i witryny SSR (Server Side Rendered), które ładują się błyskawicznie i są przyjazne dla wyszukiwarek. Zrozumiesz, jak Next.js ułatwia zarządzanie routingiem, a także jak można wdrażać takie technologie jak API Routes i ISR (Incremental Static Regeneration) w rzeczywistych projektach.",
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
        image: "node",
		description:
			"Node.js pozwala na używanie JavaScript na serwerze, co otwiera przed nami drzwi do tworzenia kompletnych aplikacji wyłącznie w jednym języku. Podczas zajęć poznamy, jak budować serwery HTTP, tworzyć RESTful API i obsługiwać operacje na danych w czasie rzeczywistym. Dzięki Node.js będziesz w stanie stworzyć wszechstronną infrastrukturę backendową, np. dla aplikacji czatowych czy aplikacji e-commerce, i zrozumiesz, jak działa środowisko asynchroniczne, co jest kluczowe dla nowoczesnych aplikacji internetowych.",
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
        image: "tailwind",
		description:
			"Tailwind CSS to framework, który umożliwia szybkie tworzenie stylów za pomocą klas użytecznościowych. Podczas korepetycji nauczysz się tworzyć responsywne interfejsy w rekordowym czasie. Dzięki Tailwind CSS zapomnisz o pisaniu złożonych reguł CSS – wszystkie potrzebne style są gotowe do użycia w formie klas! Nauczę Cię, jak efektywnie zarządzać wyglądem aplikacji i dostosować Tailwind do własnych potrzeb. W efekcie będziesz w stanie projektować nowoczesne strony w ułamku czasu.",
	},
	{
		name: "Framer Motion",
		icon: TbBrandFramerMotion,
        image: "framer",
		description:
			"Framer Motion to biblioteka, która w prosty sposób wprowadza animacje do aplikacji React. Na naszych zajęciach zrozumiesz, jak tworzyć przyciągające uwagę animacje, które wzbogacą doświadczenie użytkownika. Nauczę Cię, jak używać animacji przejść, jak dodawać animacje elementów przy przewijaniu, a także jak działa „spring” oraz „tween” do osiągania bardziej zaawansowanych efektów. Dzięki Framer Motion Twoje aplikacje będą nie tylko funkcjonalne, ale też pełne płynnych i estetycznych animacji.",
	},
];

export default function WebDev() {
	const [selectedTech, setSelectedTech] = useState(null);
	return (
		<SectionLayout
			id="link4"
			title="Web Development"
			subtitle="Nowoczesne strony internetowe"
		>
			<div className="relative flex flex-col items-center justify-center min-h-[25rem]">
				<div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-3xl">
					{techData.map((tech, index) => (
						<div
							key={index}
							className="bg-secondary border border-secondary hover:border-primary hover:scale-105 rounded-lg shadow-lg flex items-center justify-center size-32 cursor-pointer transition-all duration-300 delay-150"
							onClick={() => setSelectedTech(tech)}
						>
							<tech.icon className="size-10 text-primary" />
						</div>
					))}
				</div>
				<AnimatePresence>
					{selectedTech && (
						<motion.div
							className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedTech(null)}
						>
							<motion.div
								className="bg-secondary/90 rounded-xl p-10 mx-4 flex gap-3 relative min-h-[25rem] max-w-4xl"
								onClick={(e) => e.stopPropagation()}
							>
								<motion.div className="absolute inset-0 z-[-1]">
									<Image
										src={`/images/${selectedTech.image}.png`}
										alt="contact"
										width={500}
										height={0}
										className="rounded-xl object-cover h-auto w-full"
										loading="lazy"
									/>
								</motion.div>
								<div>
									<h2 className="text-3xl font-semibold mb-4 text-white">
										{selectedTech.name}
									</h2>
									<p className="text-gray-300 text-lg">
										{selectedTech.description}
									</p>
								</div>
								<div
									className="absolute -top-3 -left-3 bg-secondary cursor-pointer text-white transition duration-300 delay-150 hover:text-primary hover:scale-105 border border-secondary hover:border-primary rounded-full p-1"
									onClick={() => setSelectedTech(null)}
								>
									<IoIosClose className="size-7" />
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</SectionLayout>
	);
}
