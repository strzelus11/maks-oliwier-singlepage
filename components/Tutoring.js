import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlanckEquation from "./Equation";
import SectionLayout from "./SectionLayout";
import ToggleButton from "./ToggleButton";
import SVG from "./SVG";
import { useTranslation } from "react-i18next";
import VideoEmbed from "./VideoComponent";

export default function Tutoring() {
	const { t } = useTranslation();
	const [advanced, setAdvanced] = useState(false);

	return (
		<SectionLayout id="link1" title="O korepetycjach">
			<div className="text-lg bg-secondary px-4 sm:px-10 py-5 rounded-xl leading-6 relative flex flex-col justify-center min-h-[30rem] w-full max-w-full md:max-w-5xl mx-auto mt-5 sm:mt-0">
				<div className="w-full flex justify-center mb-4 sm:mb-0">
					<ToggleButton advanced={advanced} setAdvanced={setAdvanced} />
				</div>
				<AnimatePresence mode="wait">
					{advanced ? (
						<motion.div
							className="flex flex-col items-center gap-5"
							key="advanced"
							initial={{ opacity: 0, translateY: -50, scale: 0.95 }}
							animate={{ opacity: 1, translateY: 0, scale: 1, animationDelay: 0.3 }}
							exit={{ opacity: 0, translateY: 50, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<div className="text-gray-300">{t("Tutoring1")}</div>
							<PlanckEquation />
							<div className="text-gray-300">{t("Tutoring2")}</div>
							<div className="border w-[90%] border-gray-500" />
							<div className="text-white">
								W słynnym dialogu z filmu Oppenheimer, główny bohater przyznaje, że ma insight:
							</div>
							<div className="text-gray-300 sm:w-[80%]">
								<span className="text-white font-semibold italic">Niels Bohr:</span>{" "}
								&quot;Algebra&apos;s like sheet music, the important thing isn&apos;t can you read music, it&apos;s can you hear it. Can you hear the music, Robert?&quot; <br />
								<span className="text-white font-semibold italic">J. Robert Oppenheimer:</span>{" "}
								&quot;Yes, I can.&quot;
							</div>
						</motion.div>
					) : (
						<motion.div
							className="flex flex-col gap-5"
							key="basic"
							initial={{ opacity: 0, translateY: -50, scale: 0.95 }}
							animate={{ opacity: 1, translateY: 0, scale: 1, animationDelay: 0.3 }}
							exit={{ opacity: 0, translateY: 50, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<h2 className="text-white text-2xl">Korzystamy z nowoczesnych technik nauczania:</h2>

							{/* Równania i wzory */}
							<div className="text-gray-300 flex flex-col sm:flex-row gap-3 sm:items-start">
								<div className="w-full">
									<strong>Równania i wzory w LaTeX</strong> – wszystkie równania, przekształcenia i wzory zapisujemy na żywo w systemie LaTeX, dzięki czemu są czytelne, eleganckie i gotowe do natychmiastowego eksportu do pliku PDF. Zobacz na nagraniu jak to działa!
									<div className="flex justify-center mt-3">
										<div className="w-full max-w-2xl aspect-video">
											<VideoEmbed videoId="ETemKQwZCpU"/>
										</div>
									</div>
								</div>
							</div>

							{/* Interaktywne symulacje */}
							<div className="text-gray-300 flex flex-col sm:flex-row gap-3 sm:items-start">
								<div className="w-full">
									<strong>Interaktywne symulacje fizyczne</strong> – nasze lub sprawdzone symulacje z Internetu pomagają zrozumieć trudne zjawiska fizyczne i rozwijają intuicję. Oby zobaczyć z czego korzystamy, obejżyj nagranie!
									<div className="flex justify-center mt-3">
										<div className="w-full max-w-2xl aspect-video">
											<VideoEmbed videoId="Tej976dEEOQ"/>
										</div>
									</div>
								</div>
							</div>

							{/* Informacje ogólne */}
							<div className="text-gray-300 flex flex-col sm:flex-row gap-3 sm:items-start">
								<div className="w-full space-y-4">
									<p><strong>Jesteśmy olimpijczykami</strong> z pasją do nauki i wieloletnim doświadczeniem w nauczaniu. Prowadzimy korepetycje najwyższej jakości z <strong>matematyki, fizyki i informatyki</strong> – zarówno dla uczniów, jak i studentów.</p>

<p>Wyróżnia nas nie tylko solidna wiedza, ale także umiejętność jej przekazywania.</p>

<p><strong>Pracowaliśmy jako szkoleniowcy w firmie Ferajna</strong>, gdzie prowadziliśmy zajęcia dla dzieci, rozwijając ich ciekawość i kreatywność.</p>

<p>Naszym celem jest sprawić, aby nauka stała się dla Ciebie zrozumiała, ciekawa i naprawdę skuteczna.</p>

<p><strong>Wciąż nie jesteś przekonany/przekonana?</strong> Nie ma problemu — po prostu zobacz nas w akcji! Poniżej zamieściliśmy wideo przedstawiające naszą przykładową lekcję.</p>


									<div className="flex justify-center mt-3">
										<div className="w-full max-w-2xl aspect-video">
											<VideoEmbed videoId="TIAYalEPA_k"/>
										</div>
									</div>
								</div>
							</div>

						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</SectionLayout>
	);
}
