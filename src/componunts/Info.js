import Image from "next/image";

export default function Info({house}) {
    console.log(house)

    return(
        <article className="m-[1rem]">
            <Image src={house.images[0].url} width="300" height="300"></Image>
            <h4>{house.adress1} • {house.city}</h4>
            <p>{house.postalcode} {house.city}</p>
            <p>{house.type} • Ejerudgift: {house.cost} kr.</p>
            <hr />
            
        </article>
        
    )
}