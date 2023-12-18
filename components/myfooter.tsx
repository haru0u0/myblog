import Container from './container'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import { SiZenn } from "react-icons/si";

const Myfooter = () => {
  return (
        <div className="md:flex md:items-center md:justify-between w-full p-6 grid w-full bg-transparent text-black sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="w-full flex items-center justify-between">
          <Footer.Copyright href="#" by="sen-haru" year={2023} className="text-black" />
          <div className="mt-4 flex space-x-6">
            <Footer.Icon href="https://twitter.com/sen__haru" icon={BsTwitter} target="blank"  className="text-black"/>
            <Footer.Icon href="https://github.com/sen-haru" icon={BsGithub} target="blank" className="text-black"/>
            <Footer.Icon href="https://zenn.dev/haruchann" icon={SiZenn} target="blank" className="text-black"/>
          </div>
        </div>
      </div>
  );
}

export default Myfooter
