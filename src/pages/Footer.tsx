import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=" sticky bottom-0 flex justify-end gap-8   bg-black p-0 py-8 pr-8 text-white">
      <a
        className="m-0 flex items-center"
        href="https://linkedin.com/in/łukasz-słowik-05629b175"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="h-10" />
      </a>

      <a
        className="flex items-center"
        href="https://github.com/LukaszSlowik?tab=repositories"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} className="h-10" />
      </a>
    </div>
  )
}

export default Footer
