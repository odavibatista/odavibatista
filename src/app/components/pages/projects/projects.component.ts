import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  Projects = [
    {
      id: 1,
      imgUrl: "/assets/images/single-project/trattoria-hero.jpg",
      title: "Trattoria Fedeli",
      briefing: "Aplicação full-stack para controle de pedidos e comandas de usuários de um restaurante italiano, colocado em 2º Lugar no primeiro Challenge OneBitCode",
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
      imgUrl: "/assets/images/single-project/beverage-hero.jpg",
      title: "Old David's Shop",
      briefing: "E-commerce construído através de React, Vite e Bootstrap, com funções de cadastro, carrinho de compras, e finalização de compras com endereço e recibo, com layout e wireframe próprios.",
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
      imgUrl: "/assets/images/single-project/mybookshelf-hero.jpg",
      title: "MyBookshelf",
      briefing: "Aplicativo Desktop construído em Java, para a criação de um acervo virtual que contém informações sobre livros, além de avaliações e controle de qualidade deles.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/my-bookshelf",
      figmaUrl: "",
      docs: '',
      dbUrl: '',
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          name: "Java"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          name: "Maven"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "MySQL"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "PostgreSQL"
        },
      ]
    },

    {
      id: 4,
      imgUrl: "/assets/images/single-project/vivi-bot-hero.jpg",
      title: "Vivi Bot",
      briefing: "Projeto de bot de Discord open-source, feito com NodeJs e TypeScript pela biblioteca DiscordJS. Possui funções nativas para as jogadas de dados, e a aplicação pode ser clonada.",
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
      id: 5,
      imgUrl: "/assets/images/single-project/daniels-hero.jpg",
      title: "Daniels' Steaks",
      briefing: "Projeto em construção através de NuxtJS, TailWindCSS e MongoDB, para simular uma linha de açougues nacional de alta qualidade e preço acessível.",
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
      id: 6,
      imgUrl: "/assets/images/single-project/delibites-hero.jpg",
      title: "Delibites Recipes",
      briefing: "Projeto de um site de receitas, feito com a API Spoonacular e construído via Angular 16. Neste projeto, uso das opções de renderização e componentização do Angular para treinar o framework e o uso de APIs.",
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
      id: 7,
      imgUrl: "/assets/images/single-project/xhealth-hero.jpg",
      title: "xHealth Gyms",
      briefing: "SPA colaborativa desenvolvida em Angular 16 para o segundo hackathon da OneBitCode, colocado em terceiro lugar no ranking dos melhores projetos.",
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
      id: 8,
      imgUrl: "/assets/images/projects/exalted-roll-slide.jpg",
      title: "Exalted Dice Rolling",
      briefing: "Aplicativo de rolagem de dados para sistemas Exalted/VTM, com taxas de sucesso e impressão dos resultados e seus tipos na interface do usuário, feito com SCSS e JavaScript.",
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
      id: 9,
      imgUrl: "/assets/images/single-project/portfolio-hero.jpg",
      title: "Dev Portfolio",
      briefing: "Single Page Application produzida com Angular 16, Bootstrap e SCSS, com wireframe desenhado no Figma para a criação e estilização do projeto e suas funcionalidades.",
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
      id: 10,
      imgUrl: "/assets/images/projects/sequelize-boilerplate-slide.jpg",
      title: "Sequelize Boilerplate",
      briefing: "Template criado para desenvolvimento de bancos de dados SQL/NoSQL via Sequelize com interface administrativa construída do AdminJs, pronto para uso.",
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
      id: 11,
      imgUrl: "/assets/images/projects/veritas-back-end-slide.jpg",
      title: "Project Veritas Back-End",
      briefing: "Banco de dados relacional + API para um serviço de streaming de aulas de ciências humanas, com categorias, upload de vídeos e interface de administrador.",
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
    }
  
  ]

}