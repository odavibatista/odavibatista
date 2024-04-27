import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {
  public Services = [
    {
      url: "../../../../../assets/images/techs/front-end.png",
      title: "Desenvolvimento Front-End",
      description: `Dou vida ao seu projeto visual, colocando-o 
      no código, pronto para se tornar uma
      aplicação ágil e atendendo às necessidades
      que você ou o sue negócio possuam.`
    },

    {
      url: "../../../../../assets/images/techs/ui-design.png",
      title: "Design de Interface de Usuário",
      description: `Desenvolvo interfaces modernas para os seus
      sites ou as suas aplicações, tal qual remodelo 
      as já existentes, para dar a elas uma aparência
      incrível.`
    },

    {
      url: "../../../../../assets/images/techs/back-end.png",
      title: "Desenvolvimento Back-End",
      description: `Desenvolvo APIs para realizar a manipulação de dados sistêmicos com tecnologias que entreguem qualidade e segurança.`
    },
  ]
}
