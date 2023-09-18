import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  public loading: boolean = true
  public projectId: number = 1
  public project: any = {}

  constructor(
    private readonly route: ActivatedRoute,
  ){}

  Projects = [
    {
      id: 1,
      hero: "/assets/images/single-project/trattoria-hero.jpg",
      title: "Trattoria Fedeli",
      description: "Aplicação full-stack construída via NextJS 13 + banco de dados relacional PostgreSQL, colocada no segundo lugar no ranking da competição. Elaborada para mostrar o cardápio e realização de pedidos via celular por parte dos clientes, e controle e visualização dos pedidos por parte da cozinha local.",
      deployUrl: "https://trattoria-fedeli.vercel.app/",
      ghUrl: "https://github.com/odavibatista/trattoria-fedeli-frontend",
      figmaUrl: "https://www.figma.com/file/vZJZKZspo13MtoJf2AmpEJ/Trattoria--Fedeli?type=design&node-id=0%3A1&mode=design&t=qR4YgEoAc4WmuN06-1",
      docs: '',
      dbUrl: 'https://github.com/odavibatista/trattoria-fedeli-backend',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
          name: "NextJs"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass/Scss"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          name: "Figma"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node.js"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
          name: "sequelize"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "Postgres"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          name: "Express"
        },

        {
          url: "/assets/images/techs/docker.png",
          name: "Docker"
        }
      ]
    },
  
    {
      id: 2,
      hero: "/assets/images/single-project/beverage-hero.jpg",
      title: "Old David's Shop",
      description: "Loja virtual baseada em React e POO. A mesma é um remake de um dos primeiros trabalhos que fiz estudando programação em 2021, tendo sido reconstruído com uma variedade de novos recursos, produtos, funções e estilos não contidos na primeira versão do projeto.\n O projeto conta com sistema de estoque, carrinho, cadastro de contas e registro de compras realizadas pelo usuário.",
      deployUrl: "https://odavibatista.github.io/beverage-ecommerce/",
      ghUrl: "https://github.com/odavibatista/beverage-ecommerce",
      figmaUrl: "https://www.figma.com/file/FLaRgeOP2ZW6nzsXYzdVmS/Old-David's-Shop?type=design&node-id=101-2&mode=design&t=ZoSvhISzfrVSdvr0-0",
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          name: "React"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          name: "Bootstrap"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass/Scss"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node.js"
        }
      ]
    },

    {
      id: 3,
      hero: "/assets/images/single-project/vivi-bot-hero.jpg",
      title: "Vivi Bot",
      description: "Template em código open-source de bot de Discord, integrado com funcionalidades para jogos de tabuleiro baseados em rolagens de dados, contendo alta capacidade de customização, clonagem e uso local por parte do usuário. Com funções para os tipos de dados de jogo mais comuns, a aplicação vem com tudo que é necessário para se iniciar suas jogatinas!",
      deployUrl: "https://vivibot.vercel.app/",
      ghUrl: "https://github.com/odavibatista/vivi-bot",
      figmaUrl: "https://www.figma.com/file/sW6q9STTUr6pAJk3sW39ey/Vivi-Bot?type=design&node-id=0-1&mode=design&t=mMefwu3SD8rObi2Y-0",
      docs: 'https://github.com/odavibatista/vivi-bot/tree/V2.3/commands#readme',
      dbUrl: 'https://dash.daki.cc/',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          name: "Vue"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          name: "TailWindCSS"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass/Scss"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node.js"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
          name:"Discord.js"
        }
      ]
    },
    
    {
      id: 4,
      hero: "/assets/images/single-project/daniels-hero.jpg",
      title: "Daniels' Steaks",
      description: "Projeto ainda em construção. Feito majoritariamente através de NuxtJS, TailWindCSS, NodeJS e MongoDB, para simular uma linha de açougues nacional de alta qualidade e preço acessível. Front-end construído via NuxtJS, TailWindCSS e TypeScript, back-end construído com NodeJS, MongoDB, Express, e Mongoose.",
      deployUrl: "https://daniels-steaks.vercel.app/",
      ghUrl: "https://github.com/odavibatista/daniels-steaks-frontend",
      figmaUrl: '',
      docs: '',
      dbUrl: 'https://github.com/odavibatista/daniels-steaks-backend',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
          name: "Nuxt"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          name: "Vue"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          name: "TailWindCSS"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "NodeJS"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          name: "Express"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
          name: "MongoDB"
        }
      ]
    },

    {
      id: 5,
      hero: "/assets/images/single-project/delibites-hero.jpg",
      title: "Delibites Recipes",
      description: "Projeto construído através de Angular 16. Neste, realizo o uso da API Spoonacular, um serviço dedicado que contém diversas receitas, com seus ingredientes, imagens e modo de preparo. Através da integração entre a aplicação front-end e a API, construo um site de receitas em inglês em formato de Single Page Application, que faz requisições reais à API para extração de informações e renderização das mesmas via rotas dinâmicas.",
      deployUrl: "https://delibites.vercel.app/",
      ghUrl: "https://github.com/odavibatista/delibites",
      figmaUrl: '',
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
          name: "Angular"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          name: "Bootstrap"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass/Scss"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },
      ]
    },

    {
      id: 6,
      hero: "/assets/images/single-project/xhealth-hero.jpg",
      title: "xHealth Gyms",
      description: "Projeto desenvolvido para a segunda edição dos Hackathons OneBitCode. A proposta feita pelos realizadores do evento era simular um projeto freelance, aonde um cliente estaria solicitando a construção de um mockup + website com requisitos específicos para uma academia de alta qualidade, tendo sido construído com Angular em formato de Single Page Application. O mesmo foi realizado de modo colaborativo, e em dupla.",
      deployUrl: "https://xhealth.vercel.app/",
      ghUrl: "https://github.com/odavibatista/onebitcode-hackathon-2",
      figmaUrl: "https://www.figma.com/file/aE2ogEyrQlA97nXdtHk4Fv/XHealth?type=design&node-id=0%3A1&mode=design&t=PgAiu6PCSkGOfsuh-1",
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
          name: "Angular"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          name: "Bootstrap"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass/Scss"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
          name: "Photoshop"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          name: "Figma"
        },
        
      ]
    },
    {
      id: 7,
      hero: "/assets/images/projects/exalted-roll-slide.jpg",
      title: "Exalted Dice Rolling",
      description: "Pequena aplicação construída para a execução de rolagens de dados do sistema Exalted, mas também compatível com VTM. O projeto foi construído para ser utilizado por um grupo de jogadores de RPG que fazem uso do sistema e nem sempre podem contar com um bot hosteado de modo integral, para que assim pudéssem realizar suas jogadas com uma aplicação que não dependesse de hospedagem local. A aplicação conta com taxa de sucesso pré-definida e registro de resultados e sucessos.",
      deployUrl: "https://odavibatista.github.io/exalted-diceroll",
      ghUrl: "https://github.com/odavibatista/exalted-diceroll",
      figmaUrl: '',
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass/Scss"
        },
      ]
    },
  
    {
      id: 8,
      hero: "/assets/images/single-project/portfolio-hero.jpg",
      title: "Dev Portfolio",
      description: "Portfólio em formato de Single-Page-Application Angular. O mesmo tem seu mockup desenhado via Figma, e foi transformado em código através de Angular 16. O mesmo possuo páginas com rotas dinâmicas para os distintos campos desenhados para a aplicação, e possui páginas individuais para os projetos aqui depositados.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/odavibatista",
      figmaUrl: "https://www.figma.com/file/gnttWmAfu7TyKYY1WHzHGw/Portfolio---V2?type=design&node-id=3-14&mode=design&t=hA68nkqzdyHtvUgB-0",
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
          name: "Angular"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          name: "Bootstrap"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass/Scss"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          name: "Figma"
        },
      ]
    },
  
    {
      id: 9,
      hero: "/assets/images/projects/sequelize-boilerplate-slide.jpg",
      title: "Sequelize Boilerplate",
      description: "Código boilerplate para desenvolvimento de banco de dados, integrado com a ORM Sequelize, para se trabalhar com bancos de dados de tipo relacional. O projeto vêm com Jest, Docker e AdminJS configurados para serem utilizados na aplicação.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/postgres-boilerplate",
      figmaUrl: "",
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node.js"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
          name: "sequelize"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
          name: "Jest"
        },

        {
          url: "/assets/images/techs/docker.png",
          name: "Docker"
        }
      ]
    },
  
    {
      id: 10,
      hero: "/assets/images/projects/veritas-back-end-slide.jpg",
      title: "Project Veritas Back-End",
      description: "Banco de dados relacional composto por uma API, criado para comportar o back-end de um serviço de streaming focado em aulas de ciências humanas, como história, filosofia e teologia.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/project-veritas-backend",
      figmaUrl: "",
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
          name: "sequelize"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "Postgres"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          name: "Express"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node.js"
        },
      ]
    },
  
    {
      id: 11,
      hero: "/assets/images/projects/e-commerce-sql-slide.jpg",
      title: "SQL E-Commerce",
      description: "Banco de dados relacional integrado com API para a simulação do sistema de um e-commerce de tecnologias, contendo a capacidade de registrar produtos, usuários e informações de seus endereços, avaliações de produtos e comentários feitos nos mesmos por usuários.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/e-commerce-sequelize",
      figmaUrl: "",
      docs: '',
      dbUrl: 'https://user-images.githubusercontent.com/91736880/232808581-732ae6ce-8478-4e33-9a5a-3b0f04592024.png',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          name: "JavaScript"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
          name: "sequelize"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "Postgres"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          name: "Express"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node.js"
        },
      ]
    },
  
  ]

  ngOnInit(): void {
    this.getProjectId();
    this.getProject(this.projectId)
  }

  getProjectId() {
    this.route.queryParams.subscribe((queryParams: any) => {
      this.projectId = queryParams['id']
    });

    console.log(this.project)
  }

  getProject(id: number) {
    this.project = this.Projects[id - 1]
  }

  @Input() cardInfo = {
    id: 1,
    imgUrl: "",
    title: "",
    description: "",
    deployUrl: "",
    ghUrl: "",
    docs: "",
    figmaUrl: "",
    dbUrl: ""
  }
}
