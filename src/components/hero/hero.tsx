import React from 'react'
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-36 bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(26,26,26,1)_100%)]">
    <div className="flex h-auto flex-col items-center text-white">
      <BlurFade className="w-[141px] h-[32px] max-[400px]:w-[121px]  gap-2 ring-1 rounded-lg ring-[#FFC700] text-[#FFC700] flex items-center justify-center">
        <Image
        src='/caraquecoda.png'
        alt="caraquecoda-mini-logo"
        width={20}
        height={50}
        />
        <p className="font-semibold text-sm max-[400px]:text-xs">Boas vindas</p>
      </BlurFade>
      <BlurFade delay={0.2} className="w-[1036px] max-[400px]:text-3xl max-[1025px]:w-full max-md:text-5xl max-lg:text-6xl mt-[27px] font-bold text-7xl  text-center">Construimos o <span className="text-[#FFC700]">futuro</span> uma linha de cada vez</BlurFade>
      <BlurFade delay={0.2} className="text-xl max-[1025px]:text-md font-light max-md:text-sm max-md:w-[400px] max-[400px]:w-full max-[400px]:text-xs mt-8 max-[400px]:mt-4 w-[600px] text-zinc-400  text-center">empresa de desenvolvimento que oferece soluções digitais abrangentes, incluindo software, design e consultoria.</BlurFade>
      <BlurFade delay={0.3} className="flex gap-4 mt-8 ">
        <Button className="bg-white text-[16px] max-[400px]:w-[123px] max-[400px]:text-sm  w-[143px] flex items-center h-[39px] text-black font-semibold ">Descubra<ChevronDown/></Button>
        <Button className="bg-transparent text-[16px] max-[400px]:w-[123px] max-[400px]:text-sm border w-[143px] h-[39px] font-semibold border-[#FFC700] text-[#FFC700]">Contate</Button>
      </BlurFade>
    </div>
   </div>
  )
}

export default Hero
