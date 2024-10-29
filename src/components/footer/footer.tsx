import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0d0d0d] shadow-md w-full h-[259px] max-[765px]:flex-col max-[765px]:h-auto max-[765px]:items-center max-[765px]:gap-12 max-[765px]:py-12 flex justify-between items-center max-[943px]:px-[20px] px-[79px] '>
      <div className='max-[765px]:flex max-[765px]:flex-col max-[765px]:items-center' >
      <Image
        src='/caraquecoda-logo.png'
        alt="caraquecoda-logo"
        width={200}
        height={50}
        />
        <p className='text-white opacity-70 w-[400px] max-[433px]:w-full text-sm mt-[25px] max-[765px]:text-center max-[433px]:text-xs'>empresa de desenvolvimento que oferece soluções digitais abrangentes, incluindo software, design e consultoria.</p>
      
       <div className='text-white max-[765px]:flex max-[765px]:flex-col max-[765px]:items-center opacity-70 flex flex-col mt-[25px] gap-2 font-light text-sm'>
         <p >caraquecoda 2024</p>
         <p>Todos os direitos reservados</p>
       </div> 
      </div>
      <div className='text-white max-md:pl-4 flex gap-12'>
        <ul className='flex flex-col gap-3 '>
          <li className='font-bold text-lg '>Seções</li>
          <li className='text-sm opacity-70'>inicio</li>
          <li className='text-sm opacity-70'>Sobre</li>
          <li className='text-sm opacity-70'>Serviços</li>
          <li className='text-sm opacity-70'>Orçamento</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-lg '>Redes </li>
          <li className='text-sm opacity-70'>Instagram</li>
          <li className='text-sm opacity-70'>Twitter</li>
          <li className='text-sm opacity-70'>Linkedin</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li className='font-bold text-lg md:w-[100px]'>Dúvidas</li>
          <li className='text-sm opacity-70'>Contato</li>
          <li className='text-sm opacity-70'>Whatsapp</li>
        </ul>

      </div>
    </div>
  )
}

export default Footer
