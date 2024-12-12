import Image from "next/image";
import Footerinfo from "./Footerinfo";

export default function Footer() {
    return (
        <footer className="h-[20rem]">
            <div className="bg-[#F8F8FB] h-[30rem]">

            </div>
            <div className="bg-white h-[10rem]">
            </div>
            <div className="bg-[#162A41] flex items-center justify-center text-white h-[4rem]">
                <p>Layout by Jit Banik 2020</p>
            </div>
                <Footerinfo className="absolute bottom-1"></Footerinfo>
        </footer>
    )
}