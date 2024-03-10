"use client";

import Image from "next/image";
import team1 from "../../public/logos/logo-1.webp";
import team2 from "../../public/logos/logo-1.webp";
import { motion } from "framer-motion";

export default function RecentGames() {
  return (
    <motion.div
      className="w-full bg-[#DBE2E6] px-28 pt-10 pb-10 flex justify-evenly items-center "
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    >
      <div className="flex justify-evenly space-x-4 items-center px-6 py-8   bg-white rounded-md shadow-md">
        <Image
          src={team1}
          alt="recent games"
          className="w-[80px] h-[80px] object-cover"
        />
        <div className="flex flex-col justify-center items-center space-y-2">
        <p>Feb 21, 2024</p>
        <p>140 - 110</p>
        <p>Friday Premier League</p>
        <p>Lalbagh</p>
        </div>
        <Image
          src={team2}
          alt="recent games"
          className="w-[80px] h-[80px]  object-cover"
        />
      </div>
      <div className="flex justify-evenly items-center px-6 py-8 space-x-4 bg-white rounded-md shadow-md">
        <Image
          src={team1}
          alt="recent games"
          className="w-[80px] h-[80px] object-cover"
        />
        <div className="flex flex-col justify-center items-center space-y-2">
        <p>Feb 21, 2024</p>
        <p>140 - 110</p>
        <p>Friday Premier League</p>
        <p>Lalbagh</p>
        </div>
        <Image
          src={team2}
          alt="recent games"
          className="w-[80px] h-[80px]  object-cover"
        />
      </div>
      <div className="flex justify-evenly items-center px-6 py-8 space-x-4 bg-white rounded-md shadow-md">
        <Image
          src={team1}
          alt="recent games"
          className="w-[80px] h-[80px] object-cover"
        />
        <div className="flex flex-col justify-center items-center space-y-2">
        <p>Feb 21, 2024</p>
        <p>140 - 110</p>
        <p>Friday Premier League</p>
        <p>Lalbagh</p>
        </div>
        <Image
          src={team2}
          alt="recent games"
          className="w-[80px] h-[80px]  object-cover"
        />
      </div>
    </motion.div>
  );
}
