import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
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
      description: `Desenho e desenvolvo bancos de dados
      capazes de armaezenar e interligar suas
      informações, tal qual crio serviços e end-
      points capazes de manipulá-lo e utilizá-lo.`
    },
  ]
}
