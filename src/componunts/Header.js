import Image from "next/image";
import Logo from "@/images/logo.png"
import Phone from "@/images/phone.png"
import Pplane from "@/images/pplane.png"
import User from "@/images/user.png"
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white">
            <div className="bg-[#162A41] text-white flex items-center justify-evenly h-[3rem]">
                <div className="flex items-center">
                    <Image src={Pplane} alt="plane" className="h-[1rem] w-[1rem] m-1"></Image>
                    <a href="" className="flex">4000@dinmaegler.com</a>
                    <Image src={Phone} alt="phone" className="h-[1rem] w-[1rem] m-1"></Image>
                    <a href="" className="flex">+45 7070 4000</a>
                </div>
                <div className="flex items-center">
                    <Image src={User} alt="user" className="h-[1rem] w-[1rem] m-1"></Image>
                    <button>log in</button>
                </div>
            </div>
            <div className="flex justify-evenly items-center bg-white h-[4rem]">
                <a href="">
                    <Link href={"/app/page"}>
                        <Image src={Logo} alt="logo" width="250" height="250"></Image>
                    </Link>
                </a>
                <nav>
                    <ul className="flex justify-evenly w-[30rem]">
                        <li>boliger til salg</li>
                        <li>mæglere</li>
                        <li>mine favoritter</li>
                        <li>kontakt os</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}