import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail, SiYoutube, SiOverleaf, SiReplit, SiTwitter} from 'react-icons/si'

export interface footerSocialLinksProps {
  label: string
  link: string,
  icon: IconType
}

export const footerSocialLinks: footerSocialLinksProps[] = [

  {
    label: 'Acesse o meu Curriculum Vitae',
    link: 'cv',
    icon: SiOverleaf
  },
  {
    label: 'Perfil do Linkedin',
    link: 'https://www.linkedin.com/in/rafael-stuepp-riegel/',
    icon: FaLinkedin
  },
  {
    label: 'Perfil do Github',
    link: 'https://github.com/faelsriegel',
    icon: FaGithub
  },
  {
    label: 'Perfil do Replit',
    link: 'https://replit.com/@faelsriegel?tab=repls',
    icon: SiReplit
  },
  {
    label: 'Perfil do Twitter',
    link: 'https://twitter.com/faelsriegel',
    icon: SiTwitter
  },
  {
    label: 'Acesse o meu Canal do Youtube',
    link: 'https://www.youtube.com/channel/@faelsriegel',
    icon: SiYoutube
  },
  {
    label: 'Envie um Email para Mim',
    link: 'mailto:rafaelsriegel@gmail.com',
    icon: SiGmail
  },
  
]
