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
      description: "Crio aplicações inteiras, realizando sua engenharia e traçando o caminho e as tecnologias a serem utilizadas com base neles. Comumente uso Typescript via React (Next), Angular e Node (Express / Nest) com bancos de dados MongoDB, MySQL ou Postgres, mas nenhuma tecnologia nova é difícil demais para não ser testada ou aprendida."
    },
  ]
}
