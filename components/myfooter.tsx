import Container from './container'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { SiZenn } from "react-icons/si";
import { RiCopyrightLine } from "react-icons/ri";
import Link from 'next/link'
import { CiLink } from "react-icons/ci";

const Myfooter = () => {
  return (
    <div className="font-IBM p-4 flex items-center bg-transparent text-black justify-between md:grid-cols-1 w-full">
      <div className="flex items-center">
        <div>
          <RiCopyrightLine className="inline" />&nbsp;2023 haru
        </div>
      </div>
      <div className="flex justify-right bg-c3 p-3 border-2 border-black rounded-full shadow-xs hover:shadow-none transition ease-in-out delay-150 hover:translate-y-2">
        <Link href="https://twitter.com/haru0u0_" target="blank" className="inline"><BsTwitter /></Link>
      </div>
      {/*
      <div className="flex justify-right">
        <Link href="/privacypolicy">
          Privacy Policy
        </Link>
      </div>
      */}
    </div>
  );
}

export default Myfooter
