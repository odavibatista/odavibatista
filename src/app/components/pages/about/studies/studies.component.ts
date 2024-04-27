import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent {
  @Output()  studies = [
    {
      imgUrl: "https://i.imgur.com/MUUiSsI.png",
      title: "Superior em Ciência da Computação pela Universidade São Judas Tadeu",
      conclusion: 2027,
      description: "Faço o curso de Ciência da Computação, aonde aprendo sobre paradigmas dos sistemas de informação, e aprendo linguagens de programação úteis para a ciência de dados. O curso também ensina o desenvolvimento mobile, através de Java e Kotlin."
    },
    {
      imgUrl: "https://i.imgur.com/dGtJXzC.png",
      title: "PRO pela OneBitCode",
      conclusion: 2024,
      description: "Realização de Hackathons e desafios de desenvolvimento, ficando em terceiro lugar no Segundo Hackathon, e em segundo lugar no Primeiro Challenge OneBitCode. Especializações realizadas em Angular, NextJs, Tailwind e Jest."
    },
    {
      imgUrl: "https://i.imgur.com/PJKRw14.png",
      title: "Programador Full-Stack JavaScript pela OneBitCode",
      conclusion: 2023,
      description: "Realizei o curso Programador Full-Stack JavaScript da OneBitCode, aonde aprendi as principais competências para fazer uso profissinal do JavaScript no Desenvolvimento Web. Tive a chance de aprender como desenvolver sites através de mockups, e fazer uso de diversas outras tecnologias e linguagens durante este período, aprendendo também a criar servidores NodeJs, e a como tornar uma aplicação fluida através de paradigmas como a Programação Orientada a Objetos. Durante este curso, aprendi JavaScript, TypeScript, React, Bootstrap, SASS, CSS, SQL, NodeJs e NextJs."
    }
  ]
}
