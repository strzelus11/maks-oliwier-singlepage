import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlanckEquation from "./Equation";
import SectionLayout from "./SectionLayout";
import ToggleButton from "./ToggleButton";
import SVG from "./SVG";

export default function Tutoring() {
	const [advanced, setAdvanced] = useState(false);
	return (
		<SectionLayout id="Korepetycje" title="O korepetycjach">
			<div className="text-lg bg-secondary sm:px-10 p-5 rounded-xl leading-6 relative flex justify-center min-h-[30rem] mt-5 sm:mt-0">
				<ToggleButton advanced={advanced} setAdvanced={setAdvanced} />
				<AnimatePresence mode="wait">
					{advanced ? (
						<motion.div
							className="flex flex-col items-center gap-5"
							key="advanced"
							initial={{ opacity: 0, translateY: -50, scale: 0.95 }}
							animate={{
								opacity: 1,
								translateY: 0,
								scale: 1,
								animationDelay: 0.3,
							}}
							exit={{ opacity: 0, translateY: 50, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<div className="text-gray-300 text-justify">
								Przy nauczaniu fizyki i matematyki zwracamy szczególną uwagę na
								&quot;insight&quot;, czyli dogłębne rozumienie. Sprawia ono, że
								zapamiętanie wzorów czy zasad nie stanowi żadnego problemu.
								Przykładem może być wzór na rozkład Plancka:
							</div>
							<PlanckEquation />
							<div className="text-gray-300 text-justify">
								Pamiętam jak nie byłem w stanie go zapamiętać. Rzeczywiście może
								stanowić to mały kłopot. Teraz jednak kiedy widzę, że siedzi w
								nim gęstość stanów swobodnego gazu fotonowego, energia fotonu
								oraz rozkład Bosego-Einsteina, wzór staje się zupełnie znajomy.
								To właśnie insight sprawia, że niektóre zadania można policzyć w
								pamięci, podczas gdy inni sięgają po kalkulator.
							</div>
							<div className="border w-[90%] border-gray-500" />
							<div className="text-white text-justify">
								W słynnym dialogu z filmu Oppenheimer, główny bohater przyznaje,
								że ma insight:
							</div>
							<div className="text-gray-300 text-justify sm:w-[80%]">
								<span className="text-white font-semibold italic">
									Niels Bohr:
								</span>{" "}
								&quot;Algebra&apos;s like sheet music, the important thing
								isn&apos;t can you read music, it&apos;s can you hear it. Can
								you hear the music, Robert?&quot; <br />
								<span className="text-white font-semibold italic">
									J. Robert Oppenheimer:
								</span>{" "}
								&quot;Yes, I can.&quot;
							</div>
						</motion.div>
					) : (
						<motion.div
							className="flex flex-col gap-5"
							key="basic"
							initial={{ opacity: 0, translateY: -50, scale: 0.95 }}
							animate={{
								opacity: 1,
								translateY: 0,
								scale: 1,
								animationDelay: 0.3,
							}}
							exit={{ opacity: 0, translateY: 50, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<h2 className="text-white text-2xl">
								Korzystamy z nowoczesnych technik nauczania:
							</h2>
							<div className="text-gray-300 text-justify flex gap-3 items-start">
								<SVG className="size-7 text-primary" />
								<div className="w-full">
									Równania, przekształcenia i wzory zapisujemy na żywo w
									systemie opartym na technologii LaTeX, dzięki czemu są one
									czytelne i eleganckie. Umożliwia to błyskawiczne eksportowanie
									notatki z zajęć do pliku pdf, który otrzymasz.
								</div>
							</div>
							<div className="text-gray-300 text-justify flex gap-3 items-start">
								<SVG className="size-7 text-primary" />
								<div className="w-full">
									Zrozumienie wielu zjawisk fizycznych jest łatwiejsze, gdy się
									je zobaczy. Podczas korepetycji używamy profesjonalnych
									symulacji fizycznych (naszego autorstwa lub klasyków z
									Internetu). Programy te są często interaktywne i wyrabiają
									naturalną intuicję fizyczną.
								</div>
							</div>
							<div className="text-gray-300 text-justify flex gap-3 items-start">
								<SVG className="size-7 text-primary" />
								<div className="w-full">
									Nasze zajęcia przygotują Cię do wydajnego radzenia sobie z
									kartkówkami, sprawdzianami czy maturą. Zwracamy jednak też
									uwagę na fakt, że znajomość fizyki przydaje się w życiu.
									Wiedza, że droga hamowania skaluje się z kwadratem prędkości
									(pytają o to nawet na egzaminie na prawo jazdy), czy że w
									przechylonym i skręcającym samolocie nie czuć przechyłu,
									kształtuje rozumienie świata wokół nas. Dzięki niej możemy
									czasem wyjaśnić coś młodszym kolegom, albo innym razem możemy
									uniknąć wypadku. Nie wspominamy o inżynierach, którzy z fizyki
									korzystają zawodowo.
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</SectionLayout>
	);
}
