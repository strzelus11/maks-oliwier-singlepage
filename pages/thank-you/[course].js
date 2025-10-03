import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function ThankYou() {
  const router = useRouter();
  const { course } = router.query;

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      if (course === "fizyka") {
        gtag('event', 'conversion', {
          'send_to': 'AW-17577635413/W7-dCMvVoqYbENXc1b1B',
          'value': 1.0,
          'currency': 'PLN'
  });
      }
      if (course === "matematyka") {
        gtag('event', 'conversion', {
          'send_to': 'AW-17577635413/UBwJCK-op6YbENXc1b1B',
          'value': 1.0,
          'currency': 'PLN'
  });
      }
    }
  }, [course]);

  return (
    <>
      <Head>
        <title>Dziękujemy | Insight Hunters</title>
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Dziękujemy za zapisanie się!
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Skontaktujemy się z Tobą wkrótce.
          </p>
          {course && (
            <p className="text-md text-gray-400">
              Wybrałeś kurs: <span className="font-semibold">{course}</span>
            </p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

