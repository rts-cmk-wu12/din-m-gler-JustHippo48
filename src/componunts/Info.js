import Image from "next/image";

export default function Info({house}) {
    console.log(house)

    return(
        <article className="mb-[2rem] bg-white border rounded-[0.2rem] m-auto">
            <Image src={house.images[0].url} alt="houses" width="350" height="300" className="border rounded-[0.2rem]"></Image>
            <div className="m-[1rem]">
                <h4>{house.adress1} • {house.city}</h4>
                <p>{house.postalcode} {house.city}</p>
                <p>{house.type} • Ejerudgift: {house.cost} kr.</p>
                <hr />

            </div>
            
        </article>
        
    )
}