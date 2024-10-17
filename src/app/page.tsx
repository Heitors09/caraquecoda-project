import Hero from "@/components/hero/hero";
import Sobre from "@/components/sobre/sobre";
import BlurFade from "@/components/ui/blur-fade";
import { PenBox } from "lucide-react";
import Image from "next/image";





export default function Home() {
  return (
    <>
      <Hero/>
      <Sobre/>
      <div className="w-full flex flex-col items-center py-20 h-auto bg-[linear-gradient(0deg,rgba(0,0,0,1)_61%,rgba(26,26,26,1)_100%)]">
                <BlurFade inView className="text-[#FFC700] font-bold text-2xl pb-1 ">serviços ,</BlurFade>
                <BlurFade inView delay={0.2} className="text-6xl mt-8 text-white font-bold w-[800px] text-center">como posso te <span className="text-[#FFC700] ">ajudar</span> ?</BlurFade>
          <BlurFade inView delay={0.3} className=" w-full mt-12 h-[300px] flex items-center justify-between text-white px-[137px]">
             <aside className="flex flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-30 flex items-center justify-center">
                  <PenBox className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-lg text-[#FFC700]">soluções web sob medida</p>
               <h2 className="font-bold text-5xl">desenvolvimento web</h2>
               <p className="w-[600px] text-zinc-400">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold">saiba mais</p>
             </aside>
             <Image
             alt="web-browser"
             src='/web-browser.png'
             width={331}
             height={194}
             />
          </BlurFade>
          <BlurFade inView delay={0.3} className=" w-full mt-12 h-[300px] flex items-center justify-between text-white px-[137px]">
          <Image
             alt="web-browser"
             src='/web-browser.png'
             width={331}
             height={194}
             />
             <aside className="flex flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-30 flex items-center justify-center">
                  <PenBox className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-lg text-[#FFC700]">soluções web sob medida</p>
               <h2 className="font-bold text-5xl">desenvolvimento web</h2>
               <p className="w-[600px] text-zinc-400">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold">saiba mais</p>
             </aside>
            
          </BlurFade>
          <BlurFade inView delay={0.3} className=" w-full mt-12 h-[300px] flex items-center justify-between text-white px-[137px]">
             <aside className="flex flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-30 flex items-center justify-center">
                  <PenBox className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-lg text-[#FFC700]">soluções web sob medida</p>
               <h2 className="font-bold text-5xl">desenvolvimento web</h2>
               <p className="w-[600px] text-zinc-400">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold">saiba mais</p>
             </aside>
             <Image
             alt="web-browser"
             src='/web-browser.png'
             width={331}
             height={194}
             />
          </BlurFade>
          <BlurFade inView delay={0.3} className=" w-full mt-12 h-[300px] flex items-center justify-between text-white px-[137px]">
          <Image
             alt="web-browser"
             src='/web-browser.png'
             width={331}
             height={194}
             />
             <aside className="flex flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-30 flex items-center justify-center">
                  <PenBox className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-lg text-[#FFC700]">soluções web sob medida</p>
               <h2 className="font-bold text-5xl">desenvolvimento web</h2>
               <p className="w-[600px] text-zinc-400">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold">saiba mais</p>
             </aside>
            
          </BlurFade>
      </div>
    </>
  );
}
