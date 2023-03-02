import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaDocker, FaJava, FaJs, FaLinux, FaNpm, FaAws, FaDigitalOcean } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma, SiJenkins, SiCplusplus, SiBootstrap } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import getExperienceTime from '../../utils/getExperienceTime'
import { SkillsInterface } from '../../components/section/skills/types'

const skills: SkillsInterface[] = [
  
  {
    name: 'HTML',
    expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaHtml5
  },
  {
    name: 'CSS',
    expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaCss3
  },
  {
    name: 'C++',
    expTime: () => getExperienceTime(new Date("2018-01-10")),
    icon: SiCplusplus
  },
  {
    name: 'Java',
    expTime: () => getExperienceTime(new Date("2018-01-10")),
    icon: FaJava
  },
  {
    name: 'Bootstrap CSS',
    expTime: () => getExperienceTime(new Date("2018-08-10")),
    icon: SiBootstrap
  },
  {
    name: 'Tailwind CSS',
    expTime: () => getExperienceTime(new Date("2022-08-10")),
    icon: SiTailwindcss
  },
  {
    name: 'React.js',
    expTime: () => getExperienceTime(new Date("2022-08-10")),
    icon: FaReact
  },
  {
    name: 'Next.js',
    expTime: () => getExperienceTime(new Date("2022-08-10")),
    icon: SiNextdotjs
  },
  {
    name: 'Node.js',
    expTime: () => getExperienceTime(new Date("2022-08-10")),
    icon: FaNodeJs
  },
  {
    name: 'Git',
    expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: ImGit
  },
  {
    name: 'Typescript',
    expTime: () => getExperienceTime(new Date("2022-08-10")),
    icon: SiTypescript
  },
  {
    name: 'Javascript',
    expTime: () => getExperienceTime(new Date("2022-08-10")),
    icon: FaJs
  },
  {
    name: 'Jenkins',
    expTime: () => getExperienceTime(new Date("2022-11-10")),
    icon: SiJenkins
  },
  {
    name: 'Docker',
    expTime: () => getExperienceTime(new Date("2022-11-10")),
    icon: FaDocker
  },
  {
    name: 'Figma',
    expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: SiFigma
  },
]


export default skills
