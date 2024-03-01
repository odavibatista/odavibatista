import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  readonly Roles = [
    {
      imgUrl: "/assets/images/mandarin-logo.png",
      roleName: "Estagiário em Gestão de Projetos Digitais na Agência Mandarin",
      time: "11/2023 - Atualmente",
      description: "Acompanhamento da equipe de desenvolvimento, pesquisa de tecnologias para a criação de projetos, realização de QAs, desenvolvimento de novas funcionalidades e criação de tarefas, code review, testes de aplicações, integração de aplicações full-stack, elaboração de briefing para projetos, otimização nos processos de desenvolvimento, criação de aplicações e sistemas."
    },

    {
      imgUrl: "/assets/images/techs/occupation-1.png",
      roleName: "Desenvolvedor Full-Stack Freelancer",
      time: "05/2023 - Atualmente",
      description: "Crio aplicações front-end e back-end, fazendo uso das tecnologias do JavaScript e suas demais bibliotecas e frameworks, como React, Next, Angular e Bootstrap. Possuo proficiência para as aplicações front-end, por ter noções de UI e UX Design. No back-end, crio bancos de dados, API’s e endpoints para aplicações pelo meio relacional, que se interligam às aplicações front-end."
    },

    {
      imgUrl: "/assets/images/techs/occupation-2.png",
      roleName: "Designer UI & Gráfico Freelancer",
      time: "01/2022 - Atualmente",
      description: "Produzo mockups, interfaces, artes visuais, logotipos, divulgação e designs de newsletters. Reinvento e remodelo designs obsoletos ou desatualizados, e trago-os ao padrão dos dias atuais. Realizo meus trabalhos através do uso do Photoshop CS6, Figma, GIMP, e possuo experiência com Corel Draw. Meus trabalhos podem ser vistos em meu portfólio."
    }
  ]
}
