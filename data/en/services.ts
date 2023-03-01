import { FaServer } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import { MdDesktopWindows } from 'react-icons/md'
import { MdLaptopMac } from 'react-icons/md'
import { ServicesInterface } from '../../components/section/services/types'

const services: ServicesInterface[] = [
  {
    name: 'Soluções em Tecnologia',
    description: 'Solucionar adversidades na área de TI, oferecendo o suporte necessário para que sua empresa obtenha sucesso e atinja seus objetivos',
    icon: MdLaptopMac
  },
  {
    name: 'Criação de Websites',
    description: 'Desenvolvimento de sites profissionais, sistemas web, blogs e lojas virtuais com foco em resultados.',
    icon: MdDesktopWindows
  },
  {
    name: 'Manutenção de Servidores',
    description: 'Serviços de configuração, instalação, diagnóstico, manutenção e monitoramento de servidores',
    icon: FaServer
  },
]


export default services
