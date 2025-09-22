import { useState, useEffect } from "react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ContactButton from "./ContactButton";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Funkcja sprawdzająca szerokość ekranu
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // ustawienie początkowe
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="Hero"
      className="p-3 lg:py-0 bg-black text-white flex justify-center full"
    >
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[40px] items-center xl:items-start">

        {/* Cytat + overlay */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col justify-between gap-10 items-center h-full z-[2] rounded-xl p-5 relative bg-image xl:mt-5"
        >
          <div className="isolate">
            <div className="mb-5">
              <FaQuoteLeft className="size-10" />
            </div>
            <p className="text-4xl xl:text-5xl xl:leading-[2.9rem] font-semibold m-5">
              All of <span className="text-primary">physics</span> is either
              impossible or trivial. It is impossible until you understand it,
              and then it becomes trivial.
            </p>
            <div className="flex justify-between my-5">
              <p className="text-right italic text-lg text-gray-400">
                Ernest Rutherford
              </p>
              <FaQuoteRight className="size-10" />
            </div>
            <p className="m-5 mr-0 text-xl">
              Pomożemy Ci zrozumieć naukę, tak, aby <br />{" "}
              <span className="text-primary italic">impossible</span>{" "}
              <span className="text-gray-500">(niemożliwe)</span> stało się <br />
              <span className="text-primary italic">trivial</span>{" "}
              <span className="text-gray-500">(oczywiste)</span>.
            </p>
          </div>

          {/* Mobile overlay: przycisk na dole obrazka */}
          {isMobile && (
            <div className="absolute bottom-0 left-0 w-full h-24 lg:hidden flex">
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/80 rounded-b-xl"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <ContactButton className="scale-[1]" />
              </div>
            </div>
          )}

        </motion.div>

        {/* Desktopowy obrazek */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="xl:col-span-2 h-full hidden lg:flex items-center justify-center"
        >
          <div className="py-5 h-full w-full">
            <Image
              src="/images/hero.jpg"
              alt="hero"
              width={500}
              height={0}
              className="rounded-xl object-cover border-2 w-full h-full border-secondary"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
