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
      roleName: "Desenvolvedor Full-Stack & Gestor de Projetos - Estágio",
      time: "11/2023 - 06/2024",
      description: "Acompanhamento da equipe de desenvolvimento, pesquisa de tecnologias para a criação de projetos, realização de QAs, desenvolvimento de novas funcionalidades e criação de tarefas, code review, testes de aplicações, integração de aplicações full-stack, elaboração de briefing para projetos, otimização nos processos de desenvolvimento, criação de aplicações e sistemas."
    }
  ]
}
