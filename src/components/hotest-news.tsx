"use client";

import Image from "next/image";
import team1 from "../../public/logos/logo-1.webp";
import team2 from "../../public/logos/logo-1.webp";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hoocks";

export default function HotestNews() {

  return (
    <motion.div
      className="w-full bg-[#DBE2E6] px-28 pt-10 pb-10 flex justify-evenly items-center"
    ></motion.div>
  );
}
