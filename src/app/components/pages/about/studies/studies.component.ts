import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent {
  @Output()  studies = [
    {
      imgUrl: "https://i.imgur.com/1eWhckr.png",
      title: "Bacharelado em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul Virtual",
      conclusion: 2024,
      description: "Estudo no curso de Análise e Desenvolvimento de Sistemas, aonde aprendo sobre paradigmas dos sistemas de informação, e aprendo linguagens de programação úteis para a ciência de dados, como Python e Java. Aprendo também sobre paradigmas para o desenvolvimento de aplicações front-end, como princípios e tipos de layouts, através de JQuery, HTML e CSS."
    },
    {
      imgUrl: "https://i.imgur.com/dGtJXzC.png",
      title: "PRO pela OneBitCode",
      conclusion: 2024,
      description: "Estudo pelo plano PRO da OneBitCode, aonde obtenho o aprendizado de diversas tecnologias nos diversos planos de estudos. Nos planos de estudo, incluem Python, Ruby, Rails, Angular, React Native, VueJS, AWS, Figma, NextJS, e outras stacks de desenvolvimento. Incluem-se nesse período de estudos a realização de hackathons, mentorias, e ensino de inglês."
    },
    {
      imgUrl: "https://i.imgur.com/PJKRw14.png",
      title: "Programador Full-Stack JavaScript pela OneBitCode",
      conclusion: 2023,
      description: "Realizei o curso Programador Full-Stack JavaScript da OneBitCode, aonde aprendi as principais competências para fazer uso profissinal do JavaScript no Desenvolvimento Web. Tive a chance de aprender como desenvolver sites através de mockups, e fazer uso de diversas outras tecnologias e linguagens durante este período, aprendendo também a criar servidores NodeJs, e a como tornar uma aplicação fluida através de paradigmas como a Programação Orientada a Objetos. Durante este curso, aprendi JavaScript, TypeScript, React, Bootstrap, SASS, CSS, SQL, NodeJs e NextJs."
    }
  ]
}
