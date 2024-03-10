"use client";

import Image from "next/image";
import img1 from "../../public/images/img-9.jpg";
import img2 from "../../public/images/img-10.jpg";
import { motion } from "framer-motion";

export default function TrendingNews() {
  return (
    <motion.div
      className="w-full  px-28 pt-10 pb-10 grid grid-cols-2 items-center gap-8"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    >
        <div className="col-span-1 space-y-6 break-words">
            <h3 className="text-3xl font-semibold">Trending Now</h3>
            <div className="flex flex-col space-y-4">
                <Image src={img1} alt="Trending image " className="w-full h-full" />
                <div className="flex  justify-between  space-x-6">
                    <p className="flex flex-col font-semibold"><span className="text-2xl">16</span><span className="text-xl">DEC</span></p>
                    <div className="flex flex-col space-y-4 ">
                        <h3 className="text-2xl font-semibold">The third team to win back-to-back tournaments</h3>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam…</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-1">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between space-x-8">
                    <Image src={img2} alt="Trending image " className="w-[150px] h-[150px]" />
                    <div className="flex flex-col space-y-4 justify-center">
                        <p className="uppercase  font-semibold">Chamipon . 21 Feb, 2023</p>
                        <h2 className="text-2xl font-semibold break-words">Live cricket score of IND vs PAK, ICC World Cup</h2>
                    </div>
                </div>
                <div className="flex justify-between space-x-8 ">
                    <Image src={img2} alt="Trending image " className="w-[150px] h-[150px]" />
                    <div className="flex flex-col space-y-4 justify-center">
                        <p className="uppercase  font-semibold">Chamipon . 21 Feb, 2023</p>
                        <h2 className="text-2xl font-semibold break-words">Live cricket score of IND vs PAK, ICC World Cup</h2>
                    </div>
                </div>
                <div className="flex justify-between space-x-8">
                    <Image src={img2} alt="Trending image " className="w-[150px] h-[150px]" />
                    <div className="flex flex-col space-y-4  justify-center">
                        <p className="uppercase  font-semibold">Chamipon . 21 Feb, 2023</p>
                        <h2 className="text-2xl font-semibold break-words">Live cricket score of IND vs PAK, ICC World Cup</h2>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  );
}
