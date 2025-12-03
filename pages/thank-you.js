import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Dziękujemy | Insight Hunters</title>
      </Head>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Dziękujemy za zapisanie się!
          </h1>
          <p className="text-lg text-gray-300">
            Skontaktujemy się z Tobą wkrótce.
          </p>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
