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
      imgUrl: "/assets/images/projects/xhealth-slides.jpg",
      title: "xHealth Gyms",
      briefing: "SPA colaborativa desenvolvida em Angular 16 para o segundo hackathon da OneBitCode, colocado em terceiro lugar no ranking dos melhores projetos.",
      deployUrl: "https://xhealth.vercel.app/",
      ghUrl: "https://github.com/daviebatista/onebitcode-hackathon-2",
      figmaUrl: "https://www.figma.com/file/aE2ogEyrQlA97nXdtHk4Fv/XHealth?type=design&node-id=0%3A1&mode=design&t=PgAiu6PCSkGOfsuh-1",
      docs: '',
      dbUrl: ''
    },
  
    {
      id: 2,
      imgUrl: "/assets/images/projects/old-david-slide.jpg",
      title: "Old David's Shop",
      briefing: "E-commerce construído através de React, Vite e Bootstrap, com funções de cadastro, carrinho de compras, e finalização de compras com endereço e recibo, com layout e wireframe próprios.",
      deployUrl: "https://daviebatista.github.io/beverage-ecommerce/",
      ghUrl: "https://github.com/daviebatista/beverage-ecommerce",
      figmaUrl: "https://www.figma.com/file/FLaRgeOP2ZW6nzsXYzdVmS/Old-David's-Shop?type=design&node-id=101-2&mode=design&t=ZoSvhISzfrVSdvr0-0",
      docs: '',
      dbUrl: ''
    },
  
    {
      id: 3,
      imgUrl: "/assets/images/projects/exalted-roll-slide.jpg",
      title: "Exalted Dice Rolling",
      briefing: "Aplicativo de rolagem de dados para sistemas Exalted/VTM, com taxas de sucesso e impressão dos resultados e seus tipos na interface do usuário, feito com SCSS e JavaScript.",
      deployUrl: "https://daviebatista.github.io/exalted-diceroll",
      ghUrl: "https://github.com/daviebatista/exalted-diceroll",
      figmaUrl: '',
      docs: '',
      dbUrl: ''
    },
    
    {
      id: 4,
      imgUrl: "/assets/images/projects/delibites-slides.jpg",
      title: "Delibites Recipes",
      briefing: "Projeto de um site de receitas, feito com a API Spoonacular e construído via Angular 16. Neste projeto, uso das opções de renderização e componentização do Angular para treinar o framework e o uso de APIs.",
      deployUrl: "https://delibites.vercel.app/",
      ghUrl: "https://github.com/daviebatista/delibites",
      figmaUrl: '',
      docs: '',
      dbUrl: ''
    },
  
    {
      id: 5,
      imgUrl: "/assets/images/projects/portfolio-slide.jpg",
      title: "Dev Portfolio",
      briefing: "Single Page Application produzida com Angular 16, Bootstrap e SCSS, com wireframe desenhado no Figma para a criação e estilização do projeto e suas funcionalidades.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/daviebatista",
      figmaUrl: "https://www.figma.com/file/gnttWmAfu7TyKYY1WHzHGw/Portfolio---V2?type=design&node-id=3-14&mode=design&t=hA68nkqzdyHtvUgB-0",
      docs: '',
      dbUrl: ''
    },
    
    {
      id: 6,
      imgUrl: "/assets/images/projects/vivi-bot-slide.jpg",
      title: "Vivi Bot",
      briefing: "Projeto de bot de Discord open-source, feito com NodeJs e TypeScript pela biblioteca DiscordJS. Possui funções nativas para as jogadas de dados, e a aplicação pode ser clonada.",
      deployUrl: "https://vivibot.vercel.app/",
      ghUrl: "https://github.com/daviebatista/vivi-bot",
      figmaUrl: "https://www.figma.com/file/sW6q9STTUr6pAJk3sW39ey/Vivi-Bot?type=design&node-id=0-1&mode=design&t=mMefwu3SD8rObi2Y-0",
      docs: 'https://github.com/daviebatista/vivi-bot/tree/V2.3/commands#readme',
      dbUrl: 'https://dash.daki.cc/'
    },
  
    {
      id: 7,
      imgUrl: "/assets/images/projects/sequelize-boilerplate-slide.jpg",
      title: "Sequelize Boilerplate",
      briefing: "Template criado para desenvolvimento de bancos de dados SQL/NoSQL via Sequelize com interface administrativa construída do AdminJs, pronto para uso.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/postgres-boilerplate",
      figmaUrl: "",
      docs: '',
      dbUrl: ''
    },
  
    {
      id: 8,
      imgUrl: "/assets/images/projects/veritas-back-end-slide.jpg",
      title: "Project Veritas Back-End",
      briefing: "Banco de dados relacional + API para um serviço de streaming de aulas de ciências humanas, com categorias, upload de vídeos e interface de administrador.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/project-veritas-backend",
      figmaUrl: "",
      docs: '',
      dbUrl: ''
    },
  
    {
      id: 9,
      imgUrl: "/assets/images/projects/e-commerce-sql-slide.jpg",
      title: "SQL E-Commerce",
      briefing: "Banco de dados relacional montado para simular um sistema de back-end de um e-commerce de artigos de informática através de Sequelize, em conjunto com seus endpoints e sua API modelados.",
      deployUrl: "",
      ghUrl: "https://github.com/daviebatista/e-commerce-sequelize",
      figmaUrl: "",
      docs: '',
      dbUrl: 'https://user-images.githubusercontent.com/91736880/232808581-732ae6ce-8478-4e33-9a5a-3b0f04592024.png'
    },
  
  ]

}

