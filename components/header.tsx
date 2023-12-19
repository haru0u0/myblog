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
  <div className="bg-transparent md:flex md:justify-center">
      <Navbar className="font-IBMjp mb-6 px-0 bg-trasparent md:border-y-4 md:border-black border-0">
	    <Navbar.Brand href="/" className="md:hidden">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">haru blog.</span>
      </Navbar.Brand>
        <Navbar.Toggle className="text-black hover:ring-0 hover:bg-transparent focus:ring-0" />
        <Navbar.Collapse className="shadow-md md:shadow-none">
        <div className="block py-2 pr-4 pl-3 border-4 border-y-2 border-t-4 border-black text-black hover:bg-mysky md:border-0">
         <Dropdown
		 className = ""
        arrowIcon={true}
        inline
        label={"留学"}>
		<div className="hover:bg-myyellow">
        <Dropdown.Item className="border-b-2 border-black text-black hover:bg-myyellow"><Link href ="/tags/イギリス42"><Twemoji emoji="🇬🇧" /> 42 London</Link></Dropdown.Item></div>
                <Dropdown.Item className="border-b-2 border-black text-black hover:bg-myyellow"><Link href ="/tags/イギリス大学院"><Twemoji emoji="🇬🇧" /> 大学院</Link></Dropdown.Item>
                <Dropdown.Item className="text-black hover:bg-myyellow"><Link href="/tags/アメリカ交換留学"><Twemoji emoji="🇺🇸" />交換留学</Link></Dropdown.Item>
        </Dropdown>
        </div>
		<div className="hover:bg-mysky">
		<Navbar.Link className="text-black border-4 border-y-2 border-black md:p-2 hover:bg-mysky" href="/tags/イギリスお仕事">おしごと</Navbar.Link></div>
		<div className="hover:bg-mysky">
        <Navbar.Link className="text-black border-4 border-y-2 border-black md:border-0 md:p-2 hover:bg-mysky" href="/tags/つぶやき">つぶやき</Navbar.Link></div>
		<div className="hover:bg-mysky">
        <Navbar.Link className="text-black border-4 border-y-2 border-b-4 border-black md:p-2 hover:bg-mysky" href="/about">わたし</Navbar.Link></div>
        </Navbar.Collapse>
        </Navbar>
  </div>
  </>
  );
}

export default Header
