import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full bg-[#080808] max-md:hidden z-10 fixed top-0 bg-opacity-30 justify-between h-20 flex items-center px-[79px]'>
      <Image
      src='/caraquecoda-logo.png'
      alt='caraquecoda-logo'
      height={52}
      width={180}
      />
      <div className='flex items-center gap-[35px] text-white font-bold text-[16px]'>
        <Link href='/'>Sobre</Link>
        <Link href='/'>Explore</Link>
        <Link href='/'>Contato</Link>
        <Link href='/orcamento' className='ring-[#FFC700] ring-1 h-8 rounded-lg flex items-center justify-center w-[140px] group text-[#FFC700] font-bold hover:scale-105 duration-300 pl-2'>Orçamento<ChevronRight className='size-5 group-hover:translate-x-1 duration-300'/></Link>
      </div>
    </div>
  )
}

export default Navbar
