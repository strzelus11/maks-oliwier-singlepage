import Head from "next/head";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Dziękujemy | Insight Hunters</title>
      </Head>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Dziękujemy za zapisanie się!</h1>
        <p>Skontaktujemy się z Tobą wkrótce.</p>
      </div>
    </>
  );
}
