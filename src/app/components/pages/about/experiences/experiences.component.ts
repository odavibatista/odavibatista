import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  readonly Roles = [
    {
      imgUrl: "https://i.imgur.com/PQpHDGX.png",
      roleName: "CTO & Desenvolvedor Full-stack Pleno - Monétiser Technologies S.A.",
      time: "09/2025 - Atualmente",
      description: "Atuo como CTO e Desenvolvedor Full-stack & Mobile na Monétiser, elaborando processos de construção de um sistema utilizado por usuários finais e usuários internos, sobretudo elaborando processos de documentação, participando e solicitando tarefa em dailies, processos de pesquisa e aprendizado de outros devs, e elaboração de processos de engenharia e arquitetura de software."
    },
    {
      imgUrl: "https://i.imgur.com/QVCRPb0.png",
      roleName: "CTO & Co-Founder",
      time: "06/2025 - Atualmente",
      description: "Trabalho como CTO e co-fundador da Synko, uma agência de marketing, design e soluções digitais nascida de uma collab entre meus conhecimentos técnicos, ajudando empresas da região de São Paulo a impulsionarem seus negócios, cuidando da administração da empresa, delegações de tarefas e do desenvolvimento de código, com soluções de UI Design e Criação/Arte-final."
    },
    {
      imgUrl: "https://cdn-icons-png.flaticon.com/512/5969/5969474.png",
      roleName: "Desenvolvedor Full-Stack Freelancer, Professor de Programação",
      time: "02/2025 - 04/2026",
      description: "Desenvolvimentos de sistema sob medida para empresas, ministração de aulas de programação, lógica e teoria da computação para estudantes de ensino fundamental e médio, auxílio e mentoria para estudantes de graduação e pós-graduação com apoio prestado projetos acadêmicos com notas de 8.5-10.0."
    },
    {
      imgUrl: "/assets/images/corabyte-logo.png",
      roleName: "Engenheiro Full-Stack Júnior",
      time: "08/2024 - 01/2025",
      description: "Planejamento, arquitetura e engenharia de sistemas, desenvolvimento back-end e front-end, documentação de projetos, desenvolvimento de testes unitários, desenvolvimento do escopo de aplicações."
    },
    {
      imgUrl: "/assets/images/mandarin-logo.png",
      roleName: "Gestão de Projetos Digitais - Estágio",
      time: "11/2023 - 06/2024",
      description: "Acompanhamento da equipe de desenvolvimento, pesquisa de tecnologias para a criação de projetos, realização de QAs, desenvolvimento de novas funcionalidades e criação de tarefas, code review, testes de aplicações, integração de aplicações full-stack, elaboração de briefing para projetos, otimização nos processos de desenvolvimento, criação de aplicações e sistemas."
    },
  ]
}
