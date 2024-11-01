/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import BlurFade from '../ui/blur-fade'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { StarFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const Testemunhos = () => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 20,
    },
    
  })
  return (
    <div className="h-auto py-32 px-32  flex flex-col items-center relative bg-black w-full">
          <BlurFade inView className="text-[#FFC700] font-bold text-2xl pb-1 ">testemunhos ,</BlurFade>
          <BlurFade inView delay={0.2} className="text-6xl mt-8 max-sm:text-4xl text-white font-bold w-[800px] max-lg:w-full max-lg:text-5xl text-center">o que os <span className="text-[#FFC700] ">clientes</span> dizem</BlurFade>
          <BlurFade inView delay={0.3} className="text-[#FFC700] mt-8 font-bold text-xl pb-1 ">baseado em trabalhos anteriores</BlurFade>
          <div ref={ref} className="keen-slider mt-8  h-auto">
      <div className="keen-slider__slide bg-[#0a0a0a]  flex flex-col gap-5 text-white p-7 shadow-md rounded-[10px]">
       <div className='flex flex-col gap-5'>
        
        <p className='text-sm opacity-90'>“I started learning programming w/ Mosh 4 years ago with his C# courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from junior to senior Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.”</p>
        <div className='h-1 w-[100px] bg-[#FFC700]'></div>
        </div> 
        <div className='flex items-center gap-3'>
          <Image className='rounded-full  h-10 w-10'
          src='/user.jpg'
          alt='user'
          height={10}
          width={12}
          />
          <div className='flex gap-1 flex-col'>
             <p className='text-sm'>Nolan Hayes</p>
             <div className='flex gap-2'>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
             </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide bg-[#0a0a0a]  flex flex-col gap-5 text-white p-7 shadow-md rounded-[10px]">
       <div className='flex flex-col gap-5'>
        
        <p className='text-sm opacity-90'>“I started learning programming w/ Mosh 4 years ago with his C# courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from junior to senior Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.”</p>
        <div className='h-1 w-[100px] bg-[#FFC700]'></div>
        </div> 
        <div className='flex items-center gap-3'>
          <Image className='rounded-full  h-10 w-10'
          src='/user.jpg'
          alt='user'
          height={10}
          width={12}
          />
          <div className='flex gap-1 flex-col'>
             <p className='text-sm'>Nolan Hayes</p>
             <div className='flex gap-2'>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
             </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide bg-[#0a0a0a]  flex flex-col gap-5 text-white p-7 shadow-md rounded-[10px]">
       <div className='flex flex-col gap-5'>
        
        <p className='text-sm opacity-90'>“I started learning programming w/ Mosh 4 years ago with his C# courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from junior to senior Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.”</p>
        <div className='h-1 w-[100px] bg-[#FFC700]'></div>
        </div> 
        <div className='flex items-center gap-3'>
          <Image className='rounded-full  h-10 w-10'
          src='/user.jpg'
          alt='user'
          height={10}
          width={12}
          />
          <div className='flex gap-1 flex-col'>
             <p className='text-sm'>Nolan Hayes</p>
             <div className='flex gap-2'>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
             </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide bg-[#0a0a0a]  flex flex-col gap-5 text-white p-7 shadow-md rounded-[10px]">
       <div className='flex flex-col gap-5'>
        
        <p className='text-sm opacity-90'>“I started learning programming w/ Mosh 4 years ago with his C# courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from junior to senior Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.”</p>
        <div className='h-1 w-[100px] bg-[#FFC700]'></div>
        </div> 
        <div className='flex items-center gap-3'>
          <Image className='rounded-full  h-10 w-10'
          src='/user.jpg'
          alt='user'
          height={10}
          width={12}
          />
          <div className='flex gap-1 flex-col'>
             <p className='text-sm'>Nolan Hayes</p>
             <div className='flex gap-2'>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
             </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide bg-[#0a0a0a]  flex flex-col gap-5 text-white p-7 shadow-md rounded-[10px]">
       <div className='flex flex-col gap-5'>
        
        <p className='text-sm opacity-90'>“I started learning programming w/ Mosh 4 years ago with his C# courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from junior to senior Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.”</p>
        <div className='h-1 w-[100px] bg-[#FFC700]'></div>
        </div> 
        <div className='flex items-center gap-3'>
          <Image className='rounded-full  h-10 w-10'
          src='/user.jpg'
          alt='user'
          height={10}
          width={12}
          />
          <div className='flex gap-1 flex-col'>
             <p className='text-sm'>Nolan Hayes</p>
             <div className='flex gap-2'>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
             </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide bg-[#0a0a0a]  flex flex-col gap-5 text-white p-7 shadow-md rounded-[10px]">
       <div className='flex flex-col gap-5'>
        
        <p className='text-sm opacity-90'>“I started learning programming w/ Mosh 4 years ago with his C# courses. Thanks to those I landed my first job. Then, I continued to learn from his materials and made the jump from junior to senior Software Engineer (my salary went 10x from my first job). Now, 4 years later I continue to learn with his excellent courses.”</p>
        <div className='h-1 w-[100px] bg-[#FFC700]'></div>
        </div> 
        <div className='flex items-center gap-3'>
          <Image className='rounded-full  h-10 w-10'
          src='/user.jpg'
          alt='user'
          height={10}
          width={12}
          />
          <div className='flex gap-1 flex-col'>
             <p className='text-sm'>Nolan Hayes</p>
             <div className='flex gap-2'>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
               <StarFilledIcon className='text-[#FFC700]'/>
             </div>
          </div>
        </div>
      </div>
    </div>

      <ChevronLeft onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              } className='text-[#FFC700] absolute size-12 bottom-60 left-16'/>
      <ChevronRight onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              } className='text-[#FFC700] absolute size-12 bottom-60 right-16'/>
    </div>
  )
}

export default Testemunhos
