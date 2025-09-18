import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Zapisz się | Insight Hunters</title>
      </Head>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
          <Choose />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
