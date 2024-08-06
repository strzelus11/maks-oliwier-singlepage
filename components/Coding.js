import { useState } from "react";
import SectionLayout from "./SectionLayout";
import TabButton from "./TabButton";
import { SiPython } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function Coding() {
	const [activeTab, setActiveTab] = useState("Python");

	const tabContent = {
		Python: "Content for Python",
		"Data Analysis": "Content for Next JS",
		"Scikit-Learn": "Content for Scikit-Learn",
		TensorFlow: "Content for TensorFlow",
	};

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
							{tabContent[activeTab]}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</SectionLayout>
	);
}
