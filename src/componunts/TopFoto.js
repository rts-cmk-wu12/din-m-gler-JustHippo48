// import Villa from "@/images/villa.webp"

export default function TopFoto() {
    return (
        <section className="flex flex-col justify-center items-center h-[40rem] m-auto bg-[url('/villa.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="capitalize font-bold text-[2rem] text-white z-10">søg efter dit drømmebolig</h1>
            <div className="w-[40rem] bg-white m-auto p-[2rem] z-10">
                <h4 className="font-bold capitalize">søg bland 158 boliger til salg i 74 butikker</h4>
                <hr className="w-[1.5rem] border-[0.1rem] border-[#162A41] mb-4" />
                <p className="capitalize">hvad skal dit næste bolig indholde</p>
                <form action="" className="w-[50rem]">
                    <input type="search" className="border border-[#D3DEE8] w-[30rem] h-[2.5rem] p-1" placeholder="søg på fx. glaskeramisk komfur, bryggers, kælder eller ligende" />
                    <button className="capitalize bg-[#162A41] text-white w-[5rem] h-[2.5rem] ml-2">søg</button>
                </form>
            </div>
        </section>
    )
}