import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileInfo = {
    imgUrl: "https://avatars.githubusercontent.com/u/91736880?s=400&u=95ef131294e76fed47ffd2a90eab0d8167b19662&v=4",
    iconUrl: "https://img.icons8.com/?size=100x&id=83190&format=png",
    name: "Davi D. Batista O. M.",
    role1: "Full-Stack Developer",
    role2: "Project Manager",
    description: `Sou um Desenvolvedor Full-Stack e Gestor de Projetos que cria, desenha e desenvolve aplicações web e sistemas back-end. Busco sempre resolver problemas e entregar soluções às pessoas através da tecnologia, e desejo aprender as mais diversas tecnologias, para sempre explorar novos meios de se entregar resultados e satisfação.`
  }
}
