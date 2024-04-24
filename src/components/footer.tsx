'use client';
import Link from "next/link";
import { BsArrowRight, BsSend } from "react-icons/bs";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    id: 2,
    section: "Support",
    link: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy Policy",
      "Status",
    ],
  },
  {
    id: 3,
    section: "Address",
    link: [
      "Lalbagh , Dhaka , Bangladesh",
      "supremelalbaghians@gmail.com",
      "+8801404047702"
    ],
  },
];
export default function Footer() {
  return (
    <div className="bg-[#171A21]  w-full px-20 py-16 pb-6 flex justify-between flex-col">
      <div className="flex  justify-around pb-4">
        <div className="flex flex-col  justify-between">
          <h3 className="text-white text-3xl font-semibold w-[350px]">We unite cricket fans from all over the globe</h3>
          <div className="flex space-y-2 flex-col  justify-end">
            <h3 className="text-white text-xl font-semibold  tracking-wide ">
              Newsletter Sign up
            </h3>
            <div className=" relative  flex items-center bg-gray-50 rounded-md">
              <input
                type="Email address"
                name="q"
                className="py-4 text-sm w-[400px] text-black bg-gray-50 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your email address"
                autoComplete="off"
              />
              <div className="absolute  right-1 flex  justify-center items-center">
                <BsArrowRight
                  size={40}
                  className="text-white text-2xl bg-gray-900 rounded-md p-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-[150px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex  justify-between flex-col space-y-4"
            >
              <p className="text-white text-2xl font-semibold mb-0">
                {product.section}
              </p>
              <ul className="space-y-6 text-white">
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-0">
                    <Link
                      href="/"
                      className="text-sm font-normal mb-0 space-links hover:text-orange-500 transition duration-100 ease-in-out"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr />
      
      <div className="pt-16 px-4">
        <h3 className="text-center text-white">
          @2024 - All Rights Reserved by{" "}
          <Link
            className=" text-orange-400 "
            href="https://www.facebook.com/groups/145843222848964"
            target="_blank"
          >
            {" "}
            Supreme lalbagians
          </Link>
        </h3>
      </div>
    </div>
  );
}
