"use client";

import { useSectionInView } from "@/lib/hoocks";
import { CountUp } from "countup.js";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Statstics() {
  const { ref } = useSectionInView("Statistics");
  useEffect(() => {
    console.log("Statistics");
    const count1 = new CountUp("people", 90, {
      suffix: "+",
      duration: 3,
      startVal: 0,
      useEasing: true,
      enableScrollSpy: true
    });
    const count2 = new CountUp("matches", 1000, {
      duration: 3,
      startVal: 100,
      useEasing: true,
      enableScrollSpy: true
    });
    const count3 = new CountUp("years", 4, {
      suffix: "+",
      duration: 3,
      startVal: 0,
      useEasing: true,
      enableScrollSpy: true
    });
    const count4 = new CountUp("throphies", 60, {
      suffix: "+",
      duration: 3,
      startVal: 0,
      useEasing: true,
      enableScrollSpy: true
    });
    count1.start();
    count2.start();
    count3.start();
    count4.start();
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      className="w-full px-28 pt-10 pb-10 bg-white flex flex-col space-y-4 items-center justify-center relative"
    >
      {/* <h1 className="text-[100px] font-semibold opacity-10">Statstics</h1> */}
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="w-full flex justify-between items-center"
      >
        <div className="flex flex-col justify-evenly items-center">
          <p className="text-[30px]">People</p>
          <p id="people" className="text-[80px] font-semibold"></p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[30px]">Matches</p>
          <p id="matches" className="text-[80px] font-semibold"></p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[30px]">Years</p>
          <p id="years" className="text-[80px] font-semibold"></p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[30px]">Throphies</p>
          <p id="throphies" className="text-[80px] font-semibold"></p>
        </div>
      </motion.div>
    </motion.div>
  );
}
