import Link from 'next/link'
import { Dropdown, Navbar } from 'flowbite-react';
import { CMS_NAME } from '../lib/constants'
import React from 'react'
import Twemoji from '../lib/Twemoji'
import Script from 'next/script'
import { RiHomeHeartFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
//import { parse } from 'twemoji-parser';

const Header = () => {
  return (
    <>
      <div className="font-IBM hidden md:flex p-6 justify-center text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">haru blog.</Link>
      </div>
      <div className="bg-mypink sticky top-0 z-20 md:pt-2">
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
            <div className="hidden w-full md:block md:w-auto md:bg-mypink" id="navbar-dropdown">
              <ul className="flex flex-col font-medium my-4 md:flex-row md:my-0 md:text-sm md:space-x-8 md:rtl:space-x-reverse md:bg-transparent border-2 border-black shadow-sm rounded-lg md:border-0 md:shadow-none bg-white">
                <li className="border-b-2 border-black hover:bg-myblue rounded-t-lg md:rounded-none md:border-0 md:p-3">
                  <Link href="/" className="inline-flex align-center block py-2 px-3 text-black rounded md:p-0 md:m-0" aria-current="page"><Twemoji emoji="🏠" />&nbsp;ホーム</Link>
                </li>
                <li className="border-b-2 border-black md:border-0 md:p-3 hover:bg-myblue" style={{ marginLeft: 0 + 'em' }}>
                  <Link href="/tags/イギリス暮らし" className="inline-flex align-center block py-2 px-3 md:p-0"><Twemoji emoji="🇬🇧" />&nbsp;暮らし</Link>
                </li>
                <li className="border-b-2 border-black md:border-0 md:p-3 hover:bg-myblue" style={{ marginLeft: 0 + 'em' }}>
                  <Link href="/tags/つぶやき" className="inline-flex align-center block py-2 px-3 md:p-0"><Twemoji emoji="🧠" />&nbsp;つぶやき</Link>
                </li>
                <li className="border-b-2 border-black md:border-0 md:p-3 hover:bg-myblue" style={{ marginLeft: 0 + 'em' }}>
                  <Link href="/tags/イギリス大学院" className="inline-flex align-center block py-2 px-3 md:p-0"><Twemoji emoji="🇬🇧" />&nbsp;大学院</Link>
                </li>
                <li className="border-b-2 border-black md:border-0 md:p-3 hover:bg-myblue" style={{ marginLeft: 0 + 'em' }}>
                  <Link href="/tags/アメリカ交換留学" className="inline-flex align-center block py-2 px-3 md:p-0"><Twemoji emoji="🇺🇸" />&nbsp;交換留学</Link>
                </li>
                {/*
                <li className="hover:bg-myblue md:p-3" style={{ marginLeft: 0 + 'em' }}>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-start py-2 px-3 w-full border-b-2 border-black md:border-0 md:p-0">
                    <Twemoji emoji="👩🏻‍🎓" />&nbsp;アーカイブ<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white border-2 border-black rounded-lg shadow-sm w-44">
                    <ul className="text-sm" aria-labelledby="dropdownLargeButton">
                      <li className="border-b-2 border-black rounded-t-lg hover:bg-myyellow">
                        <Link href="/tags/イギリス大学院" className="block px-4 py-2"><Twemoji emoji="🇬🇧" /> 大学院</Link>
                      </li>
                      <li className="hover:bg-myyellow rounded-b-lg">
                        <Link href="/tags/アメリカ交換留学" className="block px-4 py-2"><Twemoji emoji="🇺🇸" /> 交換留学</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                */}
                <li className="md:border-0 md:p-3 hover:bg-myblue rounded-b-lg md:rounded-none" style={{ marginLeft: 0 + 'em' }}>
                  <Link href="/about" className="inline-flex align-center block py-2 px-3 border-black md:border-0 md:p-0"><Twemoji emoji="🥰" />&nbsp;about</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav >
      </div>
    </>
  );
}

export default Header
