import BlurFade from '@/components/ui/blur-fade'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'


const Page = () => {
  return (
    <div className=' py-36 flex flex-col items-center h-auto bg-black text-white'>
      <BlurFade inView className="text-[#FFC700] font-bold text-2xl pb-1 ">orçamento ,</BlurFade>
      <BlurFade inView delay={0.2} className="text-6xl mt-5 max-sm:text-4xl text-white font-bold  max-lg:w-full max-lg:text-5xl text-center">estamos esperando por <span className="text-[#FFC700] ">você</span></BlurFade>
      <BlurFade inView delay={0.3} className="text-xl mt-5 font-light  w-[600px] text-zinc-400  max-lg:w-full  text-center"> Preencha corretamente as informações definidas no formulário para que possamos entrar em contato!,</BlurFade>
      <div className='w-[962px] h-[655px] bg-[#1a1a1a] rounded-[10px] mt-5'>
         <Tabs defaultValue='step-1'>
          <div className='  border-b border-[#3a3a3a] w-full flex items-center justify-center h-[150px]'>

          <TabsList  className='w-[801px] h-[64px] p-0 flex bg-[#2a2a2a] rounded-[10px]'>
            <TabsTrigger value='step-1' className='w-[267px] text-white justify-around flex rounded-l-[10px] h-full'>
              <h2 className='font-bold text-[36px]'>01</h2>
              <div className='flex flex-col items-start'>

              <h3 className='font-bold text-[15px]'>Dados pessoais</h3>
              <p className='font-regular text-zinc-400'>informações de contato</p>

              </div>
            </TabsTrigger>
            <TabsTrigger value='step-2' className='w-[267px] text-white justify-around flex  h-full'>
              <h2 className='font-bold text-[36px]'>02</h2>
              <div className='flex flex-col items-start'>

              <h3 className='font-bold text-[15px]'>Dados pessoais</h3>
              <p className='font-regular text-zinc-400'>informações de contato</p>

              </div>
            </TabsTrigger>
            <TabsTrigger value='step-3' className='w-[267px] text-white justify-around flex rounded-r-[10px] h-full'>
              <h2 className='font-bold text-[36px]'>03</h2>
              <div className='flex flex-col items-start'>

              <h3 className='font-bold text-[15px]'>Dados pessoais</h3>
              <p className='font-regular text-zinc-400'>informações de contato</p>

              </div>
            </TabsTrigger>
          </TabsList>
          
          </div>
          <TabsContent value='step-1' className='w-full mt-0 bg-[#2a2a2a] h-[405px]'></TabsContent>
          <TabsContent value='step-2' className='w-full mt-0 bg-[#2a2a2a] h-[405px]'></TabsContent>
          <TabsContent value='step-3' className='w-full mt-0 bg-[#2a2a2a] h-[405px]'></TabsContent>
          <div className=' border-t border-[#3a3a3a] w-full  flex items-start pt-8 justify-end pr-20 h-[150px]'>
            <div className='flex font-bold '>
            <button className='w-[100px]'>Voltar</button>
            <button className='ring-[#FFC700] bg-transparent ring-1 h-10 rounded-lg flex items-center justify-center w-[140px] group text-[#FFC700] font-bold  pl-2'>Continuar<ChevronRight className='size-5 group-hover:translate-x-1 duration-300'/></button>
            </div>
            
          </div>
         </Tabs>
      </div>
    
    </div>
  )
}

export default Page
