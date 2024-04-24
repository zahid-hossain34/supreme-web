'use client';
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";


export default function SocialLinks() {
    return (
        <div className="flex items-center  py-2 h-26">
            <ul className="flex items-center">
                <li className=" flex items-center space-x-6">
                    <Link href="https://www.facebook.com/groups/145843222848964">
                        <BsFacebook size={30} />
                    </Link>
                    <Link href="https://www.youtube.com/@SupremeLalbaghians">
                        <BsYoutube size={30} />
                    </Link>
                    <Link href="https://www.youtube.com/@SupremeLalbaghians">
                        <BsTwitter size={30}  />
                    </Link>
                    <Link href="https://www.youtube.com/@SupremeLalbaghians">
                        <BsInstagram size={30}  />
                    </Link>
                </li>
            </ul>
        </div>
    );
  }
  