import Link from 'next/link'
import { Dropdown, Navbar } from 'flowbite-react';
import { CMS_NAME } from '../lib/constants'
import React from 'react'
import Twemoji from '../lib/Twemoji'
import Script from 'next/script'

const Header = () => {
  return (
    <>
      <div className="font-IBM hidden md:flex justify-center p-6 text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">haru blog.</Link>
      </div>
      <div className="navbar bg-transparent flex justify-center">
        <div>
          <div className="flex justify-center">
            <Link href="/" className="btn btn-ghost text-xl font-IBM md:hidden hover:bg-transparent">haru blog.</Link>
          </div>
          <div className="dropdown dropdown-end dropdown-bottom flex justify-end">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden hover:bg-transparent flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-sm bg-white rounded-box w-52 border-2 border-black">
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li className="hover:bg-myyellow"><Link href="">お仕事</Link></li>
              <li className="hover:bg-myyellow"><Link href="">つぶやき</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden border-2 border-black shadow-sm bg-white p-0 mb-4 md:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="hover:bg-myblue focus:bg-transparent border-r-2 border-black">
              <details>
                <summary className="hover:bg-transparent focus:bg-transparent">Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-myblue border-r-2 border-black"><a className="hover:bg-transparent">Item 1</a></li>
            <li className="hover:bg-myblue border-r-2 border-black"><a className="hover:bg-transparent">Item 1</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header
