"use client";

import Image from "next/image";
import heroImage from "../../public/images/hero-img.jpg";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hoocks";

export default function Hero() {
  const { ref } = useSectionInView("Home");
  return (
    <motion.section ref={ref} className="w-full h-[100vh] relative" id="home">
      <Image
        src={heroImage}
        alt="hero"
        className="w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className=" absolute flex flex-col space-y-4 left-0 bottom-0 px-16 pb-10"
      >
        <h3 className="text-[40px] text-white w-[450px] font-semibold">
          Get ready for the game of your life!
        </h3>
        <p className="text-xl text-white w-[750px] ">
          This championship is going to be broadcast on national TV! Stay tuned
          to watch the unforgettable battle of the champions.
        </p>
        <button className="px-4 py-2 w-[200px] rounded-full border border-zinc-100 bg-blue-400 text-white">
          More information
        </button>
      </motion.div>
      {/* <h3 className=" absolute left-40 -bottom-5  flex items-center justify-center text-[100px]  font-semibold tracking-widest text-zinc-200">SUPREME LALBAGH</h3> */}
    </motion.section>
  );
}
