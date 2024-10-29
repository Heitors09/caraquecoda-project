import BlurFade from "@/components/ui/blur-fade";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {   Code2Icon, Figma, PackageCheck, PenLine } from "lucide-react";
import Image from "next/image";

const Etapas = () => {
  return (
    <div className="w-full flex flex-col items-center h-auto py-[51px] bg-[#0d0d0d] border-[#2a2a2a] border-t border-b ">
          <BlurFade inView className="text-[#FFC700] font-bold text-2xl pb-1 ">desenvolvimento ,</BlurFade>
          <BlurFade inView delay={0.2} className="text-6xl mt-8 text-white font-bold w-[800px] text-center">conheça as <span className="text-[#FFC700] ">etapas</span> do nosso processo</BlurFade>
          <Tabs defaultValue="Análise" className="mt-12">
            <TabsList className="flex  bg-transparent">
              <TabsTrigger value="Análise" className="font-bold h-10 text-xl flex gap-2"><PenLine /> Análise</TabsTrigger>
              <div className="h-[1px] bg-zinc-400 w-24"/>
              <TabsTrigger value="Design" className="font-bold h-10  text-xl flex gap-2"><Figma /> Design</TabsTrigger>
              <div className="h-[1px] bg-zinc-400 w-24"/>
              <TabsTrigger value="Coding" className="font-bold h-10  text-xl flex gap-2"><Code2Icon /> Coding</TabsTrigger>
              <div className="h-[1px] bg-zinc-400 w-24"/>
              <TabsTrigger value="Entrega" className="font-bold h-10  text-xl flex gap-2"><PackageCheck /> Entrega</TabsTrigger>
           </TabsList>
           <div className="bg-[#1a1a1a] ring-1 mt-0.5 ring-[#2a2a2a] h-[400px] shadow-lg rounded-lg flex  justify-center items-center">


            <TabsContent value="Análise" className="flex  ml-[96px] rounded-lg  ">
                <BlurFade yOffset={0} inView  className="flex flex-col justify-center  w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">01</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Análise de Briefing</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.2} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">02</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Pesquisa de mercado</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.3} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">03</p>
                   
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Idealização de Projeto</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                
            </TabsContent>
            <TabsContent value="Design" className="   flex  rounded-lg ">
                <BlurFade yOffset={0} inView  className="flex flex-col justify-center  w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">01</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Análise de Briefing</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.2} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">02</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Pesquisa de mercado</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.3} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">03</p>
                   
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Idealização de Projeto</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>

            </TabsContent>
            <TabsContent value="Coding" className="   flex  rounded-lg ">
                <BlurFade yOffset={0} inView  className="flex flex-col justify-center  w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">01</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Análise de Briefing</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.2} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">02</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Pesquisa de mercado</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.3} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">03</p>
                   
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Idealização de Projeto</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>

            </TabsContent>
            <TabsContent value="Entrega" className="   flex  rounded-lg ">
                <BlurFade yOffset={0} inView  className="flex flex-col justify-center  w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">01</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Análise de Briefing</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.2} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">02</p>
                    <Image
                    alt="Arrow"
                    src='/Arrow.png'
                    width={80}
                    height={50}
                    />
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Pesquisa de mercado</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>
                <BlurFade yOffset={0} inView delay={0.3} className="flex flex-col justify-center w-[277px] h-[296px]">
                  <div className="flex items-center gap-12">
                    <p className="text-7xl font-bold text-[#FFC700] ">03</p>
                   
                  </div>
                  <div className="text-white mt-5 flex flex-col gap-2">
                    <h2 className="font-bold text-lg">Idealização de Projeto</h2>
                    <p className="w-[200px] text-zinc-400">Verificamos todos os principais pontos do seu Briefing e Orçamento.</p>
                    <p className="text-[#FFC700]">Saiba mais</p>
                  </div>
                </BlurFade>

            </TabsContent>
           </div>
            
            
          </Tabs>
      </div>
  )
}

export default Etapas
