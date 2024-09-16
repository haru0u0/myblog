import Link from 'next/link'
import { Dropdown, Navbar } from 'flowbite-react';
import { CMS_NAME } from '../lib/constants'
import React from 'react'
import Twemoji from '../lib/Twemoji'
import Script from 'next/script'
import { RiHomeHeartFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
//import { parse } from 'twemoji-parser';
import NavButton from './navButton.tsx';

const Header = () => {
  return (
    <>
      <div className="font-IBM hidden md:flex p-6 justify-center text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">haru blog.</Link>
      </div>
      <div className="bg-c1 sticky top-0 z-20 md:pt-2">
        <nav className="font-IBM border-b-2 border-black">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center mx-auto px-4 py-2.5 md:py-0">
            <Link href="/" className="md:hidden flex font-IBM items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">haru blog.</span>
            </Link>
            <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-sm md:hidden" aria-controls="navbar-dropdown" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto md:bg-c1" id="navbar-dropdown">
              <ul className="flex flex-col font-medium my-4 md:flex-row md:my-0 md:text-sm md:space-x-8 md:rtl:space-x-reverse md:bg-transparent border-2 border-black shadow-sm rounded-lg md:border-0 md:shadow-none bg-white">
                <NavButton path="/" emoji="🏠" text="ホーム" />
                <NavButton path="/tags/イギリス暮らし" emoji="🇬🇧" text="暮らし" />
                <NavButton path="/tags/つぶやき" emoji="🧠" text="つぶやき" />
                <NavButton path="/tags/イギリス大学院" emoji="🇬🇧" text="大学院" />
                <NavButton path="/tags/アメリカ交換留学" emoji="🇺🇸" text="交換留学" />
                <NavButton path="/about" emoji="🥰" text="About" />
              </ul>
            </div>
          </div>
        </nav >
      </div>
    </>
  );
}

export default Header
