"use client";

import { useSectionInView } from "@/lib/hoocks";
import { motion } from "framer-motion";
import { championsTable } from "@/lib/data";
const columns = [
  {
    key: "season",
    label: "SEASONS",
  },
  {
    key: "champion",
    label: "CHAMPION",
  },
  {
    key: "runnerup",
    label: "RUNNER UP",
  },
];

export default function Fpl() {
  const { ref } = useSectionInView("FPL");

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
      className="w-full px-28 pt-10 pb-10 bg-gray-100 flex flex-col space-y-4 items-center justify-center"
    >
      <h1 className="text-[100px] font-semibold opacity-10">
        Friday Premier league
      </h1>
      <table>
        <thead>
          <tr>
            {columns.map(({ key, label }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {championsTable.map(({ season, champion, runnerup }) => (
            <motion.tr
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
              key={season}
            >
              <motion.td>{season}</motion.td>
              <motion.td>{champion}</motion.td>
              <motion.td>{runnerup}</motion.td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
