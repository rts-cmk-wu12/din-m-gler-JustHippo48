import Info from "@/componunts/Info";
import Link from "next/link";

export default async function Fourhouses() {
    const response = await fetch("https://dinmaegler.onrender.com/homes?_limit=4")

    const four = await response.json()
    console.log(four);
    
    return(
      <section className="flex flex-col items-center align-center h-[60rem] m-auto bg-[#F8F8FB] p-[2rem]">
        <h2 className="font-bold text-[2rem]">Udvalgte Boliger</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ex!</p>
        <div className="flex flex-wrap w-[50rem] h-[10rem]">
          {four.map((house) => (
            <Info key={house.id} house={house}/>
          ))}
        </div>
        <div>
          <Link href={"/allHouses"}>
            <button className="capitalize bg-[#162A41] text-white w-[9rem] h-[2.5rem]">se all boliger</button>
          </Link>
        </div>
      </section>
    )
}