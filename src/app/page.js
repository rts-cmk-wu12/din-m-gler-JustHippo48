import Apps from "@/componunts/Apps";
import Fourhouses from "@/componunts/Fourhouses";
import TopFoto from "@/componunts/TopFoto";


export default async function Home() {

  return (
    <>
      <main>
        <TopFoto />
        <Fourhouses />
        <Apps />
      </main>
    </>
  )
}
