import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export interface footerSocialLinksProps {
  label: string
  link: string,
  icon: IconType
}

export const footerSocialLinks: footerSocialLinksProps[] = [
  {
    label: 'Perfil do Github',
    link: 'https://github.com/faelsriegel',
    icon: FaGithub
  },
  {
    label: 'Perfil do Linkedin',
    link: 'https://www.linkedin.com/in/rafael-stuepp-riegel/',
    icon: FaLinkedin
  },
  {
    label: 'Envie Email',
    link: 'mailto:rafaelsriegel@gmail.com',
    icon: SiGmail
  },
]
