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
    description: `Sou um Desenvolvedor Full-Stack aficionado por lidar com coisas complexas. Sou especializado em back-end, desenhando o fluxo das aplicações e otimizando as já existentes, além de possuir alta experiência e capacidade para documentar sistemas e organizar ciclos de desenvolvimento.`
  }
}
