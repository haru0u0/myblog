import Link from 'next/link'
import { Dropdown, Navbar } from 'flowbite-react';
import { CMS_NAME } from '../lib/constants'
import React from 'react'
import Twemoji from '../lib/Twemoji'

const Header = () => {
  return (
    <Navbar fluid rounded className="mb-20 mt-4 ml-2 mr-2">
      <Navbar.Brand href="/">
        <img src="/assets/favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Senharu blog.</span>
      </Navbar.Brand>
        <div className="flex">
        <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <div className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
         <Dropdown
        arrowIcon={true}
        inline
        label={"Study Abroad"}>
        <Dropdown.Item href ="/tags/イギリス42"><Twemoji emoji="🇬🇧" /> 42 London</Dropdown.Item>
                <Dropdown.Item href ="/tags/イギ リス大学院"><Twemoji emoji="🇬🇧" /> 大学院</Dropdown.Item>
                <Dropdown.Item href="/tags/アメリカ交換留学"><Twemoji emoji="🇺🇸" />交換留学</Dropdown.Item>
                <Dropdown.Item href="/tags/アメリカ語学留学"><Twemoji emoji="🇺🇸" />語学留学</Dropdown.Item>
                <Dropdown.Item href="/tags/SWY"><Twemoji emoji="🛳" />SWY</Dropdown.Item>
        </Dropdown>
        </div>
        <Navbar.Link href="/">Work Abroad</Navbar.Link>
        <Navbar.Link href="#">Edtech</Navbar.Link>
        <div className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
        <Dropdown
        arrowIcon={true}
        inline
        label={"Travel"}
        >
        <Dropdown.Item href ="/tags/イギリス旅行"><Twemoji emoji="🇬🇧" /> イギリス国内旅行</Dropdown.Item>
        <Dropdown.Item href ="/tags/その他以外"><Twemoji emoji="🇬🇧" /> その他海外</Dropdown.Item>
        <Dropdown.Item href="/tags/アメリカ交換留学"><Twemoji emoji="🇺🇸" />日本国内旅行</Dropdown.Item>
        </Dropdown>
        </div>
        <Navbar.Link href="#">About</Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
  );
}

export default Header
