// "use client";

// import Image from "next/image";
// import team1 from "../../public/logos/logo-1.webp";
// import team2 from "../../public/logos/logo-1.webp";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hoocks";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// export default function RecentGames() {
//   const { ref } = useSectionInView("Matches");
//   return (
//     <motion.section
//       ref={ref}
//       className="w-full bg-[#DBE2E6] px-28 pt-10 pb-10 flex justify-evenly items-center "
//       initial={{
//         opacity: 0,
//         y: 100,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <Swiper
//         spaceBetween = {50}
//         slidesPerView = {3}
//         navigation = {true}
//         modules = {[Navigation]}
//       >
//         <SwiperSlide>
//           {" "}
//           <div className="flex justify-evenly space-x-4 items-center px-6 py-8   bg-white rounded-md shadow-md">
//             <Image
//               src={team1}
//               alt="recent games"
//               className="w-[80px] h-[80px] object-cover"
//             />
//             <div className="flex flex-col justify-center items-center space-y-2">
//               <p>Feb 21, 2024</p>
//               <p>140 - 110</p>
//               <p>Friday Premier League</p>
//               <p>Lalbagh</p>
//             </div>
//             <Image
//               src={team2}
//               alt="recent games"
//               className="w-[80px] h-[80px]  object-cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <div className="flex justify-evenly items-center px-6 py-8 space-x-4 bg-white rounded-md shadow-md">
//             <Image
//               src={team1}
//               alt="recent games"
//               className="w-[80px] h-[80px] object-cover"
//             />
//             <div className="flex flex-col justify-center items-center space-y-2">
//               <p>Feb 21, 2024</p>
//               <p>140 - 110</p>
//               <p>Friday Premier League</p>
//               <p>Lalbagh</p>
//             </div>
//             <Image
//               src={team2}
//               alt="recent games"
//               className="w-[80px] h-[80px]  object-cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <div className="flex justify-evenly items-center px-6 py-8 space-x-4 bg-white rounded-md shadow-md">
//             <Image
//               src={team1}
//               alt="recent games"
//               className="w-[80px] h-[80px] object-cover"
//             />
//             <div className="flex flex-col justify-center items-center space-y-2">
//               <p>Feb 21, 2024</p>
//               <p>140 - 110</p>
//               <p>Friday Premier League</p>
//               <p>Lalbagh</p>
//             </div>
//             <Image
//               src={team2}
//               alt="recent games"
//               className="w-[80px] h-[80px]  object-cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <div className="flex justify-evenly space-x-4 items-center px-6 py-8   bg-white rounded-md shadow-md">
//             <Image
//               src={team1}
//               alt="recent games"
//               className="w-[80px] h-[80px] object-cover"
//             />
//             <div className="flex flex-col justify-center items-center space-y-2">
//               <p>Feb 21, 2024</p>
//               <p>140 - 110</p>
//               <p>Friday Premier League</p>
//               <p>Lalbagh</p>
//             </div>
//             <Image
//               src={team2}
//               alt="recent games"
//               className="w-[80px] h-[80px]  object-cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <div className="flex justify-evenly items-center px-6 py-8 space-x-4 bg-white rounded-md shadow-md">
//             <Image
//               src={team1}
//               alt="recent games"
//               className="w-[80px] h-[80px] object-cover"
//             />
//             <div className="flex flex-col justify-center items-center space-y-2">
//               <p>Feb 21, 2024</p>
//               <p>140 - 110</p>
//               <p>Friday Premier League</p>
//               <p>Lalbagh</p>
//             </div>
//             <Image
//               src={team2}
//               alt="recent games"
//               className="w-[80px] h-[80px]  object-cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <div className="flex justify-evenly items-center px-6 py-8 space-x-4 bg-white rounded-md shadow-md">
//             <Image
//               src={team1}
//               alt="recent games"
//               className="w-[80px] h-[80px] object-cover"
//             />
//             <div className="flex flex-col justify-center items-center space-y-2">
//               <p>Feb 21, 2024</p>
//               <p>140 - 110</p>
//               <p>Friday Premier League</p>
//               <p>Lalbagh</p>
//             </div>
//             <Image
//               src={team2}
//               alt="recent games"
//               className="w-[80px] h-[80px]  object-cover"
//             />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </motion.section>
//   );
// }
