import Image from "next/image";
import Logo from "@/images/logo.png"
import Phone from "@/images/phoneblue.png"
import Plane from "@/images/planeblue.png"
import Position from "@/images/positionblue.png"
import Info from "@/images/sammen.png"

export default function Footerinfo() {
    return (
    <div className="flex flex-col w-[50rem]">
        <Image src={Logo} alt="logo" width="250" height="250"></Image>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio repellendus enim </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="flex justify-evenly">
            <ul className="bg-white w-[25rem] h-[20rem] p-1 flex flex-col justify-evenly">
                <li className="flex">
                    <Image src={Phone} alt="phone icon" className="h-[2.5rem] w-[2.5rem] m-1"></Image>
                    <div>
                        <p>ring til os</p>
                        <p>+45 7070 4000</p>
                    </div>
                </li>
                <li className="flex">
                    <Image src={Plane} alt="mail icon" className="h-[2.5rem] w-[2.5rem] m-1"></Image>
                    <div>
                        <p>send en mail</p>
                        <p>4000@dinmaegler.com</p>
                    </div>
                </li>
                <li className="flex">
                    <Image src={Position} alt="position on a map icon" className="h-[2.5rem] w-[2.5rem] m-1"></Image>
                    <div>
                        <p>butik</p>
                        <p>Stændertorvet 78, 4000 Roskilde</p>
                    </div>
                </li>
                <li className="m-1">
                    <p>Din Mægler Roskilde, er din</p>
                    <p>boligbutik i lokalområdet</p>
                </li>
            </ul>
            <div className="flex flex-col justify-between">
                <ul>
                    <li>
                        <p>Quick Links</p>
                    </li>
                    <li>
                        <p>boliger til salg</p>
                    </li>
                    <li>
                        <p>mæglere</p>
                    </li>
                    <li>
                        <p>kontak os</p>
                    </li>
                    <li>
                        <p>log in/ bliv bruger</p>
                    </li>
                </ul>
                <Image src={Info} alt="sammenslutning" className="h-[4rem] w-[20rem]"></Image>
            </div>
        </div>
    </div>        
    )
}