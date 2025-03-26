/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_KEY: process.env.API_KEY,
	},
	i18n: {
		locales: ["en", "pl"],
		defaultLocale: "pl",
	},
};

export default nextConfig;
