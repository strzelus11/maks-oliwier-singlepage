import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Choose from "@/components/Choose";

export default function ContactPage() {
  return (
    <>

      <div className="flex flex-col min-h-screen bg-gray-900">
        {/* Header */}
        <Header />

        {/* Główna treść */}
        <div className="screen">
          <Choose />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

