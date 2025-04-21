import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  readonly Roles = [
    {
      imgUrl: "https://cdn-icons-png.flaticon.com/512/5969/5969474.png",
      roleName: "Criação de Sistema - Empresa Confidencial",
      time: "02/2024 - Atualmente",
      description: "Desenvolvimento de um sistema sob medida completo para uma empresa atuante no setor de fotografia, design gráfico, impressões e criação de fotoprodutos. O projeto consiste em um sistema para controle de entrada e saída de serviços, insumos e atividades realizadas por cada funcionário da empresa, de modo a centralizar o controle de vendas de suas múltiplas lojas."
    },
    {
      imgUrl: "/assets/images/corabyte-logo.png",
      roleName: "Desenvolvedor Full-Stack Júnior",
      time: "08/2024 - 11/2024",
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
