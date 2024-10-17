import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0d0d0d] shadow-md w-full h-[259px] flex justify-between items-center px-[79px] '>
      <div>
      <Image
        src='/caraquecoda-logo.png'
        alt="caraquecoda-logo"
        width={200}
        height={50}
        />
        <p className='text-white opacity-70 w-[400px] text-sm mt-[25px]'>empresa de desenvolvimento que oferece soluções digitais abrangentes, incluindo software, design e consultoria.</p>
      
       <div className='text-white opacity-70 flex flex-col mt-[25px] gap-2 font-light text-sm'>
         <p >caraquecoda 2024</p>
         <p>Todos os direitos reservados</p>
       </div> 
      </div>
      <div className='text-white flex gap-12'>
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
          <li className='font-bold text-lg w-[100px]'>Dúvidas</li>
          <li className='text-sm opacity-70'>Contato</li>
          <li className='text-sm opacity-70'>Whatsapp</li>
        </ul>

      </div>
    </div>
  )
}

export default Footer
