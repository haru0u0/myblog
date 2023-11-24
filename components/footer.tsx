import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { FaTwitter, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
            <a target="_blank"
              href="https://twitter.com/sen__haru"
            >
               <FaTwitter />
            </a>
            <a target="_blank"
              href="https://github.com/sen-haru"
            >
              <FaGithub />
            </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
