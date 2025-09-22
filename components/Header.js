import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { slideIn } from "@/utils/motion";
import ContactButton from "./ContactButton";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Header = () => {
  const inactiveLink =
    "hover:text-primary cursor-pointer hover:scale-105 hover:decoration-primary decoration-secondary underline underline-offset-4 transition-all delay-150 duration-300";
  const activeLink = inactiveLink.replace(
    "decoration-secondary",
    "decoration-white"
  );

  const { t } = useTranslation();
  const links = ["link1", "link2", "link3", "link4", "link5"];

  const [navOpen, setNavOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("data-scroll-to");

    if (pathname !== "/") {
      router.push("/").then(() => {
        document
          .querySelector(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    }

    setNavOpen(false);
  };

  useEffect(() => {
    const divs = document.querySelectorAll("div[data-scroll-to]");

    divs.forEach((div) => {
      div.addEventListener("click", handleClick);
    });

    return () => {
      divs.forEach((div) => {
        div.removeEventListener("click", handleClick);
      });
    };
  }, [pathname]);

  return (
    <>
      {/* DESKTOP */}
      <header className="fixed top-0 w-full hidden lg:flex justify-around h-[80px] items-center bg-secondary text-white z-[10]">
        <div data-scroll-to="#Hero">
          <img
            className="h-[50px] cursor-pointer -mt-3"
            src="/website.svg"
            alt=""
          />
        </div>
        <nav className="flex gap-10">
          {links.map((link) => (
            <div
              data-scroll-to={`#${link.replace(/\s+/g, "")}`}
              key={link}
              className={inactiveLink}
            >
              {t(link)}
            </div>
          ))}
		  <Link className={inactiveLink} href={"/olimpic"}>
            Koło Olimpijskie
          </Link>
          <Link className={inactiveLink} href={"/about"}>
            O nas
          </Link>
          
        </nav>
        <ContactButton />
      </header>

      {/* MOBILE */}
      <header
        className={`w-full lg:hidden fixed top-0 z-10 flex justify-around h-[70px] items-center transition delay-50 duration-500 ${
          navOpen ? "bg-black" : "bg-secondary"
        } text-white`}
      >
        <div className={inactiveLink} onClick={() => setNavOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div data-scroll-to="#Hero">
          <img
            className="h-[50px] cursor-pointer -mt-3"
            src="/website.svg"
            alt=""
          />
        </div>
        <ContactButton className="hidden sm:flex" />
        <AnimatePresence>
          {navOpen && (
            <motion.nav
              variants={slideIn("left", "tween", 0, 0.5, false)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              className="fixed z-10 top-0 left-0 h-screen bg-secondary w-[60%] pl-[20px]"
            >
              <div
                onClick={() => setNavOpen(false)}
                className="absolute top-5 right-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-between items-start mt-[100px]">
                <nav className="flex flex-col gap-10 justify-center mb-10 text-lg">
                  {links.map((link) => (
                    <div
                      data-scroll-to={`#${link.replace(/\s+/g, "")}`}
                      onClick={handleClick}
                      key={link}
                      className={inactiveLink}
                    >
                      {t(link)}
                    </div>
                  ))}
                  <Link
                    onClick={() => setNavOpen(false)}
                    className={inactiveLink}
                    href={"/about"}
                  >
                    O nas
                  </Link>
                  <Link
                    onClick={() => setNavOpen(false)}
                    className={inactiveLink}
                    href={"/olympic-club"}
                  >
                    Koło Olimpijskie
                  </Link>
                  <div onClick={() => setNavOpen(false)}>
                    <ContactButton />
                  </div>
                </nav>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
