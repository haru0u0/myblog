import Container from './container'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { SiZenn } from "react-icons/si";
import { RiCopyrightLine } from "react-icons/ri";

const Myfooter = () => {
  return (
    <div className="font-IBM md:flex md:items-center md:justify-between w-full p-2 pt-4 grid bg-transparent text-black sm:flex sm:justify-between md:grid-cols-1">
      <div className="w-full flex items-center justify-between font-IBM">
        <div className="font-IBM text-black">
          <RiCopyrightLine className="inline" />&nbsp;2023 haru
        </div>
        <div className="mt-4 flex space-x-6 items-center mt-0">
          <Footer.Icon href="https://twitter.com/sen__haru" icon={BsTwitter} target="blank" className="text-black" />
          {/*<Footer.Icon href="https://github.com/sen-haru" icon={BsGithub} target="blank" className="text-black" />
          <Footer.Icon href="https://zenn.dev/haruchann" icon={SiZenn} target="blank" className="text-black" />*/}
        </div>
      </div>
    </div>
  );
}

export default Myfooter
