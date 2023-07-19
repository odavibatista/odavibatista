import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Output() Projects = [
    {
      imgUrl: "../../../../assets/images/projects/delibites-slides.jpg",
      title: "Delibites Recipes",
      description: "Projeto de um site de receitas, feito com a API Spoonacular e construído via Angular 16. Neste projeto, uso das opções de renderização e componentização do Angular para treinar o framework e o uso de APIs.",
      deployUrl: "https://delibites.vercel.app/",
      ghUrl: "https://github.com/daviebatista/delibites",
      figmaUrl: '',
      docs: '',
      dbUrl: ''
    },

    {
      imgUrl: "../../../../../assets/images/projects/old-david-slide.jpg",
      title: "Old David's Shop",
      description: "E-commerce construído através de React, Vite e Bootstrap, com funções de cadastro, carrinho de compras, e finalização de compras com endereço e recibo, com layout e wireframe próprios.",
      deployUrl: "https://daviebatista.github.io/beverage-ecommerce/",
      ghUrl: "https://github.com/daviebatista/beverage-ecommerce",
      figmaUrl: "https://www.figma.com/file/FLaRgeOP2ZW6nzsXYzdVmS/Old-David's-Shop?type=design&node-id=101-2&mode=design&t=ZoSvhISzfrVSdvr0-0",
      docs: '',
      dbUrl: ''
    },

    {
      imgUrl: "../../../../../assets/images/projects/exalted-roll-slide.jpg",
      title: "Exalted Dice Rolling",
      description: "Aplicativo de rolagem de dados para sistemas Exalted/VTM, com taxas de sucesso e impressão dos resultados e seus tipos na interface do usuário, feito com SCSS e JavaScript.",
      deployUrl: "https://daviebatista.github.io/exalted-diceroll",
      ghUrl: "https://github.com/daviebatista/exalted-diceroll",
      figmaUrl: '',
      docs: '',
      dbUrl: ''
    },

    {
      imgUrl: "../../../../../assets/images/projects/onebitmusic-slide.jpg",
      title: "OneBitMusic",
      description: "Landing Page construída como desafio do primeiro hackathon da OneBitCode, com a proposta de se seguir o wireframe do Figma, e implementando funções à página.",
      deployUrl: "https://onebitmusic.vercel.app/",
      ghUrl: "https://github.com/daviebatista/onebitcode-hackathon-1",
      figmaUrl: "https://www.figma.com/file/qV4ADMl4Vvytj15d2aBEMH/Onebitmusic?type=design&node-id=1674-135&mode=design",
      docs: '',
      dbUrl: ''
    },

    {
      imgUrl: "../../../../../assets/images/projects/vivace-hotels-slide.jpg",
      title: "Vivace Hotels",
      description: "Landing page para uma agência fictícia de hotéis, feita para a prática de desenvolvimento de wireframes para melhora no UI e UX design.",
      deployUrl: "https://daviebatista.github.io/vivace-hotels/",
      ghUrl: "https://github.com/daviebatista/vivace-hotels/tree/build",
      figmaUrl: "https://www.figma.com/file/YthDo58TItOrjkhOk11nlf/Vivace-Hotels?type=design&node-id=0-1&mode=design&t=goTNcrTeclhy78gw-0",
      docs: '',
      dbUrl: ''
    },
    
    {
      imgUrl: "../../../../../assets/images/projects/mailwind-slide.jpg",
      title: "MailWind",
      description: "Serviço de e-mails local construído com TailWindCSS, ReactJs, Vite, TypeScript e JSON.",
      deployUrl: "https://mail-wind.vercel.app/",
      ghUrl: "https://github.com/daviebatista/mail-wind",
      figmaUrl: "",
      docs: '',
      dbUrl: ''
    },

    {
      imgUrl: "../../../../../assets/images/projects/portfolio-slide.jpg",
      title: "Dev Portfolio",
      description: "Single Page Application produzida com Angular 16, Bootstrap e SCSS, com wireframe desenhado no Figma para a criação e estilização do projeto e suas funcionalidades.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/daviebatista",
      figmaUrl: "https://www.figma.com/file/gnttWmAfu7TyKYY1WHzHGw/Portfolio---V2?type=design&node-id=3-14&mode=design&t=hA68nkqzdyHtvUgB-0",
      docs: '',
      dbUrl: ''
    },

    {
      imgUrl: "../../../../assets/images/projects/e-commerce-sql-slide.jpg",
      title: "SQL E-Commerce",
      description: "Banco de dados relacional montado para simular um sistema de back-end de um e-commerce de artigos de informática através de Sequelize, em conjunto com seus endpoints e sua API modelados.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/e-commerce-sequelize",
      figmaUrl: "",
      docs: '',
      dbUrl: 'https://user-images.githubusercontent.com/91736880/232808581-732ae6ce-8478-4e33-9a5a-3b0f04592024.png'
    },
    
    {
      imgUrl: "../../../../../assets/images/projects/vivi-bot-slide.jpg",
      title: "Vivi Bot",
      description: "Projeto de bot de Discord open-source, feito com NodeJs e TypeScript pela biblioteca DiscordJS. Possui funções nativas para as jogadas de dados, e a aplicação pode ser clonada.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/vivi-bot",
      figmaUrl: "",
      docs: 'https://github.com/daviebatista/vivi-bot/tree/V2.3/commands#readme',
      dbUrl: ''
    },

    {
      imgUrl: "../../../../../assets/images/projects/veritas-back-end-slide.jpg",
      title: "Project Veritas Back-End",
      description: "Banco de dados relacional + API para um serviço de streaming de aulas de ciências humanas, com categorias, upload de vídeos e interface de administrador.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/project-veritas-backend",
      figmaUrl: "",
      docs: '',
      dbUrl: ''
    },
    
    {
      imgUrl: "../../../../../assets/images/projects/sequelize-boilerplate-slide.jpg",
      title: "Sequelize Boilerplate",
      description: "Template criado para desenvolvimento de bancos de dados SQL/NoSQL via Sequelize com interface administrativa construída do AdminJs, pronto para uso.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/postgres-boilerplate",
      figmaUrl: "",
      docs: '',
      dbUrl: ''
    },
    


  ]


}
