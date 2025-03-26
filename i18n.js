import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./public/locales/en/common.json";
import plTranslations from "./public/locales/pl/common.json";

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: enTranslations },
		pl: { translation: plTranslations },
	},
	lng: "pl",
	fallbackLng: "pl",
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
});

export default i18n;
