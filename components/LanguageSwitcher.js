import i18n from "../i18n";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
	const [currentLang, setCurrentLang] = useState(i18n.language);

	const switchLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setCurrentLang(lng);
	};

	useEffect(() => {
		const handleLanguageChange = (lng) => setCurrentLang(lng);
		i18n.on("languageChanged", handleLanguageChange);
		return () => i18n.off("languageChanged", handleLanguageChange);
	}, []);

	return (
		<div>
			{currentLang === "en" ? (
				<button onClick={() => switchLanguage("pl")}>
					<img className="size-6" src="pl.png" alt="" />
				</button>
			) : (
				<button onClick={() => switchLanguage("en")}>
					<img className="size-6" src="en.png" alt="" />
				</button>
			)}
		</div>
	);
};

export default LanguageSwitcher;
