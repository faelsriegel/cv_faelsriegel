import { ProjectsInterface } from "../../components/section/portfolio/types"

const projects: ProjectsInterface[] = [
  {
    name: 'SAPU - Dashboard',
    description: 'O app web Sistema Analitico de Progressão Universitaria, consiste em ser um sistema de gerenciamento e analise da matriz curricular do discente.',
    imgSource: '/images/projects/projeto4.jpeg',
    skills: ['Next.js', 'Node.js', 'Typescript'],
    websiteUrl: 'https://sapu.eco.com.br',
  },
  {
    name: 'Gerador de Assinaturas',
    description: 'Esse projeto surgiu pela necessidades dos membros da Stratus Cloud, terem assinaturas profissionais e personalizadas em seus emails corporativos',
    imgSource: '/images/projects/projeto2.png',
    skills: ['HTML', 'CSS', 'Javascript' ],
    websiteUrl: 'https://faelsriegel-assemailgenerator.vercel.app',
    githubUrl: 'https://github.com/faelsriegel/GeradorAssinaturaEmail',
  },
  {
    name: 'Website com Bootstrap',
    description: 'Atividade associada a disciplina de Programação 2, onde foi desenvolvido um website simples e estático em bootstrap',
    imgSource: '/images/projects/projeto3.png',
    skills: ['HTML', 'CSS', 'Bootstrap' ],
    websiteUrl: 'https://web-site-bootstrap.vercel.app/',
    githubUrl: 'https://github.com/faelsriegel/WebSiteBootstrap'

  },

]


export default projects
