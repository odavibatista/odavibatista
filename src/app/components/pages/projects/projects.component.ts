import { Component } from '@angular/core';

type ProjectType = 'front-end' | 'back-end' | 'full-stack' | 'desktop';

interface ProjectTechnology {
  url: string;
  name: string;
}

interface Project {
  id: number;
  imgUrl: string;
  title: string;
  briefing: string;
  deployUrl: string;
  ghUrl: string;
  figmaUrl: string;
  docs: string;
  dbUrl: string;
  type: ProjectType;
  technologies: ProjectTechnology[];
}

interface ProjectSection {
  title: string;
  projects: Project[];
  options: Record<string, unknown>;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  readonly Projects: Project[] = [
    {
      id: 1,
      imgUrl: "https://i.imgur.com/HjteXSX.jpeg",
      title: "Synko Design Agency",
      briefing: "Landing Page desenvolvida para a Agência Colaborativa de Design Synko.",
      deployUrl: "https://synko.design/",
      ghUrl: "",
      figmaUrl: "",
      docs: '',
      dbUrl: '',
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
      ]
    },
    {
      id: 2,
      imgUrl: "/assets/images/single-project/trattoria-hero.jpg",
      title: "Trattoria Fedeli",
      briefing: "Aplicação full-stack para controle de pedidos e comandas de usuários de um restaurante italiano, colocado em 2º Lugar no primeiro Challenge OneBitCode",
      deployUrl: "https://trattoria-fedeli.vercel.app/",
      ghUrl: "https://github.com/odavibatista/trattoria-fedeli-frontend",
      figmaUrl: "https://www.figma.com/file/vZJZKZspo13MtoJf2AmpEJ/Trattoria--Fedeli?type=design&node-id=0%3A1&mode=design&t=qR4YgEoAc4WmuN06-1",
      docs: '',
      type: "full-stack",
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
      id: 13,
      imgUrl: "/assets/images/projects/state-machine-apps-slide.jpg",
      title: "State Machine Apps",
      briefing: "Conjunto de aplicações desenvolvidas para representar conceitos de Teoria da Computação através da simulação de autômatos finitos determinísticos.",
      deployUrl: "https://state-machine-apps.vercel.app/",
      ghUrl: "https://github.com/odavibatista/state-machine-apps",
      figmaUrl: "",
      docs: "https://github.com/odavibatista/state-machine-apps#readme",
      dbUrl: "",
      type: "front-end",
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          name: "React"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
          name: "Vite"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          name: "CSS Modules"
        }
      ]
    },

    {
      id: 14,
      imgUrl: "/assets/images/projects/vulgata-bot-slide.jpg",
      title: "Vulgata Discord Bot",
      briefing: "Bot para Discord capaz de consultar versículos da Vulgata Latina em tempo real através de Slash Commands.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/vulgata-discord-bot",
      figmaUrl: "",
      docs: "https://github.com/odavibatista/vulgata-discord-bot#readme",
      dbUrl: "",
      type: "back-end",
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          name: "Python"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
          name: "Discord API"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          name: "BeautifulSoup"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          name: "Requests"
        }
      ]
    },

    {
      id: 3,
      imgUrl: "/assets/images/projects/wits-slide.jpg",
      title: "Wits!",
      briefing: "App full-stack desenvolvido para a sexta edição do Hackathon OneBitCode, simulando um app de aprendizado gamificado para lógica, aritmética e raciocínio.",
      deployUrl: "https://wits-site-webapp.vercel.app/",
      ghUrl: "https://github.com/odavibatista/wits-site-webapp",
      figmaUrl: "",
      docs: '',
      dbUrl: 'https://github.com/odavibatista/wits-site-api',
      type: "full-stack",
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
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          name: "TailwindCSS"
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
          url: "https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png",
          name: "TypeORM"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
          name: "Nest"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "PostgreSQL"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
          name: "MySQL"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
          name: "Jest"
        },

        {
          url: "/assets/images/techs/docker.png",
          name: "Docker"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
          name: "Swagger"
        },
      ]
    },

    {
      id: 4,
      imgUrl: "/assets/images/single-project/xhealth-hero.jpg",
      title: "xHealth Gyms",
      briefing: "SPA colaborativa desenvolvida em Angular 16 para o segundo hackathon da OneBitCode, colocado em terceiro lugar no ranking dos melhores projetos.",
      deployUrl: "https://xhealth.vercel.app/",
      ghUrl: "https://github.com/odavibatista/onebitcode-hackathon-2",
      figmaUrl: "https://www.figma.com/file/aE2ogEyrQlA97nXdtHk4Fv/XHealth?type=design&node-id=0%3A1&mode=design&t=PgAiu6PCSkGOfsuh-1",
      docs: '',
      dbUrl: '',
      type: "front-end",
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
      id: 5,
      imgUrl: "/assets/images/single-project/beverage-hero.jpg",
      title: "Old David's Shop",
      briefing: "E-commerce construído através de React, Vite e Bootstrap, com funções de cadastro, carrinho de compras, e finalização de compras com endereço e recibo, com layout e wireframe próprios.",
      deployUrl: "https://odavibatista.github.io/beverage-ecommerce/",
      ghUrl: "https://github.com/odavibatista/beverage-ecommerce",
      figmaUrl: "https://www.figma.com/file/FLaRgeOP2ZW6nzsXYzdVmS/Old-David's-Shop?type=design&node-id=101-2&mode=design&t=ZoSvhISzfrVSdvr0-0",
      docs: '',
      dbUrl: '',
      type: "front-end",
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
      id: 15,
      imgUrl: "/assets/images/projects/vivace-hotels-slide.jpg",
      title: "Vivace Hotels",
      briefing: "Landing Page institucional desenvolvida para fins de estudo em UI/UX Design e desenvolvimento front-end, simulando a presença digital da rede fictícia de pousadas Vivace Hotels.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/vivace-hotels",
      figmaUrl: "https://www.figma.com/file/YthDo58TItOrjkhOk11nlf/Vivace-Hotels",
      docs: "https://github.com/odavibatista/vivace-hotels#readme",
      dbUrl: "",
      type: "front-end",
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          name: "React"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "SCSS"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          name: "Figma"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
          name: "Vite"
        }
      ]
    },

    {
      id: 16,
      imgUrl: "/assets/images/projects/nestjs-boilerplate-slide.jpg",
      title: "NestJS Boilerplate",
      briefing: "Boilerplate backend para aplicações NestJS contendo autenticação JWT, criptografia com Bcrypt, TypeORM, Swagger, Docker, Seeds, Cache e validações com Zod e Class Validator.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/nestjs-boilerplate",
      figmaUrl: "",
      docs: "https://github.com/odavibatista/nestjs-boilerplate#readme",
      dbUrl: "",
      type: "back-end",
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
          name: "NestJS"
        },
        {
          url: "https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png",
          name: "TypeORM"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "PostgreSQL"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          name: "MySQL"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          name: "Docker"
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
          name: "Swagger"
        }
      ]
    },

    {
  id: 17,
  imgUrl: "/assets/images/projects/wecryptit-slide.jpg",
  title: "WeCryptIt",
  briefing: "Aplicação web voltada para criptografia e proteção de informações, desenvolvida para demonstrar conceitos de segurança da informação, criptografia e experiência do usuário.",
  deployUrl: "https://we-crypt-it.vercel.app//",
  ghUrl: "https://github.com/odavibatista/we-crypt-it",
  figmaUrl: "",
  docs: "https://github.com/odavibatista/we-crypt-it#readme",
  dbUrl: "https://github.com/odavibatista/we-crypt-it-api",
  type: "full-stack",
  technologies: [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      name: "Vite"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git"
    }
  ]
},

        {
      id: 6,
      imgUrl: "https://i.imgur.com/uKqwLPN.jpeg",
      title: "Itaim Esfihas",
      briefing: "Case de rebranding e de construção de site e refatoração das redes sociais de um restaurante de longa data da Zona Sul de São Paulo.",
      deployUrl: "https://itaim-esifhas-landing-page.vercel.app/",
      ghUrl: "",
      figmaUrl: "https://guedesdesignc.myportfolio.com/itaim-esfihas-rebranding",
      docs: '',
      dbUrl: '',
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
      ]
    },

    {
      id: 7,
      imgUrl: "/assets/images/projects/devs-den-slide.jpg",
      title: "Dev's Den",
      briefing: "App full-stack simulando um site de empregos para profissionais de T.I. e Programação, desenvolvido para as disciplinas de Usabilidade e Desenvolvimento Web + Sistemas Distribuídos.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/devs-den",
      figmaUrl: "https://www.figma.com/design/pZS7rF8CjPX3C9qH4USMUM/Dev's-Den?node-id=0-1&t=VOQf6PR3WZuTkjZ6-1",
      docs: '',
      dbUrl: 'https://github.com/odavibatista/devs-den-api',
      type: "full-stack",
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
          url: "https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png",
          name: "TypeORM"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
          name: "Nest"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "PostgreSQL"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
          name: "MySQL"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
          name: "Jest"
        },

        {
          url: "/assets/images/techs/docker.png",
          name: "Docker"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
          name: "Swagger"
        },
      ]
    },

    {
      id: 8,
      imgUrl: "/assets/images/single-project/mybookshelf-hero.jpg",
      title: "MyBookshelf",
      briefing: "Aplicativo Desktop construído em Java, para a criação de um acervo virtual que contém informações sobre livros, além de avaliações e controle de qualidade deles.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/my-bookshelf",
      figmaUrl: "",
      docs: '',
      dbUrl: '',
      type: "desktop",  
      technologies: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          name: "Java"
        },
        
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
          name: "Maven"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
          name: "MySQL"
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "PostgreSQL"
        },
      ]
    },

    {
      id: 9,
      imgUrl: "/assets/images/single-project/vivi-bot-hero.jpg",
      title: "Vivi Bot",
      briefing: "Projeto de bot de Discord open-source, feito com NodeJs e TypeScript pela biblioteca DiscordJS. Possui funções nativas para as jogadas de dados, e a aplicação pode ser clonada.",
      deployUrl: "https://vivibot.vercel.app/",
      ghUrl: "https://github.com/odavibatista/vivi-bot",
      figmaUrl: "https://www.figma.com/file/sW6q9STTUr6pAJk3sW39ey/Vivi-Bot?type=design&node-id=0-1&mode=design&t=mMefwu3SD8rObi2Y-0",
      docs: 'https://github.com/odavibatista/vivi-bot/tree/V2.3/commands#readme',
      dbUrl: 'https://dash.daki.cc/',
      type: "back-end",
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
      id: 10,
      imgUrl: "/assets/images/single-project/daniels-hero.jpg",
      title: "Daniels' Steaks",
      briefing: "Projeto em construção através de NuxtJS, TailWindCSS e MongoDB, para simular uma linha de açougues nacional de alta qualidade e preço acessível.",
      deployUrl: "https://daniels-steaks.vercel.app/",
      ghUrl: "https://github.com/odavibatista/daniels-steaks-frontend",
      figmaUrl: '',
      docs: '',
      dbUrl: 'https://github.com/odavibatista/daniels-steaks-backend',
      type: "full-stack",
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
      id: 11,
      imgUrl: "/assets/images/single-project/delibites-hero.jpg",
      title: "Delibites Recipes",
      briefing: "Projeto de um site de receitas, feito com a API Spoonacular e construído via Angular 16. Neste projeto, uso das opções de renderização e componentização do Angular para treinar o framework e o uso de APIs.",
      deployUrl: "https://delibites.vercel.app/",
      ghUrl: "https://github.com/odavibatista/delibites",
      figmaUrl: '',
      docs: '',
      dbUrl: '',
      type: "full-stack",
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
      id: 12,
      imgUrl: "/assets/images/projects/exalted-roll-slide.jpg",
      title: "Exalted Dice Rolling",
      briefing: "Aplicativo de rolagem de dados para sistemas Exalted/VTM, com taxas de sucesso e impressão dos resultados e seus tipos na interface do usuário, feito com SCSS e JavaScript.",
      deployUrl: "https://odavibatista.github.io/exalted-diceroll",
      ghUrl: "https://github.com/odavibatista/exalted-diceroll",
      figmaUrl: '',
      docs: '',
      dbUrl: '',
      type: "front-end",
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
  id: 18,
  imgUrl: "/assets/images/projects/core-notes-slide.jpg",
  title: "Core Notes",
  briefing: "Aplicação full-stack de gerenciamento de notas para treino de utilização de Cache, Arquitetura DDD e outros conceitos avançados de back-end.",
  deployUrl: "",
  ghUrl: "https://github.com/odavibatista/corelab-web-challenge",
  figmaUrl: "",
  docs: "https://github.com/odavibatista/corelab-api-challenge#readme",
  dbUrl: "https://github.com/odavibatista/corelab-api-challenge",
  type: "full-stack",
  technologies: [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      name: "NextJS"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      name: "NestJS"
    },
    {
      url: "https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png",
      name: "Prisma"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      name: "MySQL"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      name: "Redis"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      name: "Swagger"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      name: "Jest"
    }
  ]
    },
    {
      id: 13,
      imgUrl: "/assets/images/single-project/portfolio-hero.jpg",
      title: "Dev Portfolio",
      briefing: "Single Page Application produzida com Angular 16, Bootstrap e SCSS, com wireframe desenhado no Figma para a criação e estilização do projeto e suas funcionalidades.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/odavibatista",
      figmaUrl: "https://www.figma.com/file/gnttWmAfu7TyKYY1WHzHGw/Portfolio---V2?type=design&node-id=3-14&mode=design&t=hA68nkqzdyHtvUgB-0",
      docs: '',
      dbUrl: '',
      type: "front-end",
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
      id: 14,
      imgUrl: "/assets/images/projects/veritas-back-end-slide.jpg",
      title: "Project Veritas",
      briefing: "Aplicação Full-stack desenvolvida em Express no back-end e Next no front-end, simulando um serviço de aprendizado virtual de ciências humanas e sociais.",
      deployUrl: "",
      ghUrl: "https://github.com/odavibatista/project-veritas-frontend",
      figmaUrl: "",
      docs: '',
      dbUrl: 'https://github.com/odavibatista/project-veritas-backend',
      type: "full-stack",
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

  ];

  readonly splideOptions = {
    perMove: 2,
    perPage: 3,
    height: 500,
    gap: '1.5rem',
    padding: { left: '3rem', right: '3rem' },
    arrows: true,
    pagination: false,
    breakpoints: {
      '1200': {
        perPage: 2,
        padding: { left: '2rem', right: '2rem' },
        arrows: false
      },
      '991': {
        padding: { left: '1.5rem', right: '1.5rem' }
      },
      '768': {
        perPage: 1,
        padding: { left: '1rem', right: '1rem' },
      },
      '375': {
        padding: { left: '0.75rem', right: '0.75rem' },
      }
    }
  };

  readonly projectSections = [
    {
      title: 'Full-stack',
      projects: this.Projects.filter((project) => project.type === 'full-stack')
    },
    {
      title: 'Front-end',
      projects: this.Projects.filter((project) => project.type === 'front-end')
    },
    {
      title: 'Back-end',
      projects: this.Projects.filter((project) => project.type === 'back-end')
    },
    {
      title: 'Desktop / Apps',
      projects: this.Projects.filter((project) => project.type === 'desktop')
    }
  ].map((section) => ({
    ...section,
    options: this.createSectionOptions(section.projects.length)
  })) as ProjectSection[];

  createSectionOptions(projectCount: number): Record<string, unknown> {
    return {
      ...this.splideOptions,
      arrows: projectCount > 3,
      perMove: projectCount > 3 ? 2 : 1,
    };
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

}