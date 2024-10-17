import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='w-full bg-[#080808] z-10 fixed top-0 bg-opacity-30 justify-between h-20 flex items-center px-[79px]'>
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
        <Button className='bg-[#FFC700] w-[140px] text-black font-bold'>Orçamento</Button>
      </div>
    </div>
  )
}

export default Navbar
