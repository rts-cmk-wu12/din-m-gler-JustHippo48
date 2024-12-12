import Info from "./Info"

export default async function Morehouses() {
    const response = await fetch("https://dinmaegler.onrender.com/homes")

    const more = await response.json()

    return (
        <div className="flex flex-wrap items-center justify-center m-auto w-[50rem] h-[10rem]">
            {more.map((house) => (
                <Info key={house.id} house={house}/>
              ))}
        </div>
    )
}