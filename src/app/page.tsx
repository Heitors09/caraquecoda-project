import Etapas from "@/components/etapas/etapas";
import Hero from "@/components/hero/hero";
import Servicos from "@/components/servicos/servicos";
import Sobre from "@/components/sobre/sobre";
import Testemunhos from "@/components/testemunhos/testemunhos";





export default function Home() {
  return (
    <>
      <Hero/>
      <Sobre/>  
      <Servicos/>
      <Etapas/>
      <Testemunhos/>
    </>
  );
}
