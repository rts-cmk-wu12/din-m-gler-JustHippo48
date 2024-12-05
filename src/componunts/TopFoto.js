import Image from "next/image";
// import Villa from "@/images/villa.webp"

export default function TopFoto() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="capalized">søg efter dit drømmebolig</h1>
            <div>
                <h4>søg bland 158 boliger til salg i 74 butikker</h4>
                <hr className="w-[1.5rem] border-[0.1rem] border-[#162A41]" />
                <p>hvad skal dit næste bolig indholde</p>
                <form action="">
                    <input type="search" className="border border-[#D3DEE8]" />
                    <button>søg</button>
                </form>
            </div>
        </section>
    )
}