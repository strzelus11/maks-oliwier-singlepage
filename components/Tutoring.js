import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlanckEquation from "./Equation";
import SectionLayout from "./SectionLayout";
import ToggleButton from "./ToggleButton";

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
								“insight”, czyli dogłębne rozumienie. Sprawia ono, że
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
								"Algebra's like sheet music, the important thing isn't can you
								read music, it's can you hear it. Can you hear the music,
								Robert?" <br />
								<span className="text-white font-semibold italic">
									J. Robert Oppenheimer:
								</span>{" "}
								"Yes, I can."
							</div>
						</motion.div>
					) : (
						<motion.div
							className="flex flex-col items-center gap-5"
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
							<div className="text-gray-300 text-justify">
								Podczas nauki fizyki i matematyki w przypadku osób chcących
								przetrwać i zdać egzamin, skupiamy się przede wszystkim na
								przekazaniu niezbędnej wiedzy i sprytnych technik, które pozwolą
								łatwiej przyswoić trudne koncepcje.
							</div>
							<div className="text-gray-300 text-justify">
								Dla komfortu i szybkości nauki stosujemy również zapisywanie
								równań używając “Latex”, co oznacza, że równania będą takie jak
								w podręcznikach ułatwiając czytelność oraz zapamiętywanie
								wzorów.
							</div>
							<div className="text-gray-300 text-justify">
								Będziemy rozwiązywali zadania zaczynając od tych najbardziej
								popularnych, których motyw często pojawia się w zadaniach na
								egzaminie. Dodatkowo z uwagi na to, że są to zajęcia
								indywidualne warto przygotować sobie listę problemów/pytań,
								które sprawiają Ci największe kłopoty, abyśmy wiedzieli na co
								najbardziej zwracać uwagę.
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</SectionLayout>
	);
}
