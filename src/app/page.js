import Fourhouses from "@/componunts/Fourhouses";
import Header from "@/componunts/Header";
import TopFoto from "@/componunts/TopFoto";


export default async function Home() {

  return (
    <>
      <Header></Header>
      <main>
        <TopFoto />
        <Fourhouses />

      </main>
    </>
  )
}
