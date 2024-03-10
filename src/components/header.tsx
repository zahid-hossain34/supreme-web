"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { headerLinks } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Logo from "./logo";
import SocialLinks from "./social-links";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.div
      className="relative bg-slate-50 flex justify-around items-center h-26 px-6 py-1 shadow-lg"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1}}
    >
      <Link href="#home">
        <Logo />
      </Link>
      <nav className="flex h-full w-[26rem]">
        <ul className="flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 ">
          {headerLinks.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className=" border border-orange-400  text-gray-900 rounded-xl   absolute inset-0   dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <SocialLinks />

    </motion.div>
  );
}
