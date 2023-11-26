import Container from './container'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import { SiZenn } from "react-icons/si";

const Myfooter = () => {
  return (
    <Footer container>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="w-full flex items-center justify-between">
          <Footer.Copyright href="#" by="sen-haru" year={2023} />
          <div className="mt-4 flex space-x-6">
            <Footer.Icon href="https://twitter.com/sen__haru" icon={BsTwitter} target="blank" />
            <Footer.Icon href="https://github.com/sen-haru" icon={BsGithub} target="blank"/>
            <Footer.Icon href="https://zenn.dev/haruchann" icon={SiZenn} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Myfooter
