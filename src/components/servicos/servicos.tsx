import BlurFade from "@/components/ui/blur-fade";
import { PenBox, Smartphone } from "lucide-react";
import Image from "next/image";


import React from 'react'

const Servicos = () => {
  return (
    <div className="w-full flex flex-col items-center py-20  h-auto bg-[linear-gradient(0deg,rgba(0,0,0,1)_61%,rgba(26,26,26,1)_100%)]">
                <BlurFade inView className="text-[#FFC700] font-bold text-2xl pb-1 ">serviços ,</BlurFade>
                <BlurFade inView delay={0.2} className="text-6xl mt-8 max-sm:text-4xl text-white font-bold w-[800px] max-lg:w-full max-lg:text-5xl text-center">como posso te <span className="text-[#FFC700] ">ajudar</span> ?</BlurFade>
          <BlurFade inView delay={0.3} className="max-lg:items-center max-lg:w-full max-lg:mt-24 max-lg:text-center w-full gap-12 justify-center   max-lg:flex-col max-lg:gap-12 mt-12  h-[300px] flex items-center  text-white lg:px-[137px]">
             <aside className="flex max-lg:gap-5 max-lg:items-center  flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-10 flex items-center justify-center">
                  <PenBox className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-md max-sm:text-base text-[#FFC700]">soluções web sob medida</p>
               <h2 className="font-bold max-sm:text-3xl text-4xl">Desenvolvimento web</h2>
               <p className="w-[500px] max-md:w-full text-zinc-300 max-md:text-sm">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold">saiba mais</p>
             </aside>
             <Image
             alt="web-browser"
             src='/web-browser.png'
             width={331}
             height={194}
             className="max-lg:hidden"
             />
          </BlurFade>
          <BlurFade inView delay={0.3} className="max-lg:items-center max-lg:w-full max-lg:mt-24 max-lg:text-center  w-full max-lg:flex-col max-lg:gap-12 mt-12 h-[300px] flex items-center  gap-32 justify-center text-white lg:px-[137px]">
             <Image
             alt="mobile"
             src='/mobile.png'
             width={231}
             height={194}
             className="max-lg:hidden"
             />
             <aside className="flex max-lg:gap-5 max-lg:items-center flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-10  flex items-center justify-center">
                  <Smartphone className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-md max-sm:text-base text-[#FFC700]">soluções mobile sob medida</p>
               <h2 className="font-bold max-sm:text-3xl text-4xl">Desenvolvimento mobile</h2>
               <p className="w-[500px] max-md:w-full text-zinc-300 max-md:text-sm">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold ">saiba mais</p>
             </aside>
          </BlurFade>
          <BlurFade inView delay={0.3} className="max-lg:items-center max-lg:w-full max-lg:mt-24 max-lg:text-center w-full gap-12 justify-center   max-lg:flex-col max-lg:gap-12 mt-12  h-[300px] flex items-center  text-white lg:px-[137px]">
             <aside className="flex max-lg:gap-5 max-lg:items-center  flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-10 flex items-center justify-center">
                  <PenBox className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-md max-sm:text-base text-[#FFC700]">soluções web sob medida</p>
               <h2 className="font-bold max-sm:text-3xl text-4xl">Desenvolvimento web</h2>
               <p className="w-[500px] max-md:w-full text-zinc-300 max-md:text-sm">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold">saiba mais</p>
             </aside>
             <Image
             alt="web-browser"
             src='/web-browser.png'
             width={331}
             height={194}
             className="max-lg:hidden"
             />
          </BlurFade>
          <BlurFade inView delay={0.3} className="max-lg:items-center max-lg:w-full max-lg:mt-24 max-lg:text-center  w-full max-lg:flex-col max-lg:gap-12 mt-12 h-[300px] flex items-center  gap-32 justify-center text-white lg:px-[137px]">
             <Image
             alt="mobile"
             src='/mobile.png'
             width={231}
             height={194}
             className="max-lg:hidden"
             />
             <aside className="flex max-lg:gap-5 max-lg:items-center flex-col gap-3">
              <div className="h-12 w-12 rounded-full bg-[#FFC700]  bg-opacity-10  flex items-center justify-center">
                  <Smartphone className="text-[#FFC700]"/>
              </div>
               <p className="font-bold text-md max-sm:text-base text-[#FFC700]">soluções mobile sob medida</p>
               <h2 className="font-bold max-sm:text-3xl text-4xl">Desenvolvimento mobile</h2>
               <p className="w-[500px] max-md:w-full text-zinc-300 max-md:text-sm">Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!, possamos entrar em contato!possamos entrar em contato!!possamos entrar em contato!</p>
               <p className="font-bold ">saiba mais</p>
             </aside>
          </BlurFade>
      </div>
  )
}

export default Servicos
