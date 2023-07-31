import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=" sticky bottom-0 flex justify-end gap-8   bg-black p-0 py-8 pr-8 text-white">
      <a
        data-tool-tip="My Linkedin"
        className="relative flex  items-center after:absolute after:bottom-0  after:right-5 after:block after:origin-right after:scale-0  after:whitespace-nowrap after:rounded-md after:bg-slate-500 after:p-4 after:text-sm after:transition-all  after:duration-150 after:ease-out  after:content-[attr(data-tool-tip)] after:hover:bottom-full after:hover:scale-100"
        href="https://linkedin.com/in/łukasz-słowik-05629b175"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="h-10" />
      </a>

      <a
        className="relative flex  items-center after:absolute after:bottom-0  after:right-5 after:block after:origin-right after:scale-0  after:whitespace-nowrap after:rounded-md after:bg-slate-500 after:p-4 after:text-sm after:transition-all  after:duration-150 after:ease-out  after:content-[attr(data-tool-tip)] after:hover:bottom-full after:hover:scale-100"
        data-tool-tip="My Github"
        href="https://github.com/LukaszSlowik?tab=repositories"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} className="h-10" />
      </a>
    </div>
  )
}

export default Footer
