import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

const NavbarMobile = () => {
  return (
    <div className='bg-opacity-30 h-16 bg-[#080808] z-10 w-full fixed top-0 flex items-center justify-between px-5 md:hidden'>
      <Image
      src='/caraquecoda.png'
      alt='caraquecoda-logo'
      height={52}
      width={30}
      />
      <HamburgerMenuIcon className='text-white h-[42px] w-[25px]'/>
    </div>
  )
}

export default NavbarMobile
