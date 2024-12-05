import Info from "@/componunts/Info";

export default async function Fourhouses() {
    const response = await fetch("https://dinmaegler.onrender.com/homes?_limit=4")

    const four = await response.json()
    console.log(four);
    
    return(
      <section className="flex flex-col items-center align-center">
        <div className="flex flex-wrap w-[50rem] h-[10rem]">
          {four.map((house) => (
            <Info key={house.id} house={house}/>
          ))}

        </div>
      </section>
    )
}