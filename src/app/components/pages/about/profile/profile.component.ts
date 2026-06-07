import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileInfo = {
    imgUrl:
      'https://avatars.githubusercontent.com/u/91736880?s=400&u=95ef131294e76fed47ffd2a90eab0d8167b19662&v=4',
    iconUrl: 'https://img.icons8.com/?size=100x&id=83190&format=png',
    name: 'Davi Batista Oliveira',
    role1: 'Software Architect',
    role2: 'Technical Lead',
    description: ` Arquiteto de Software especializado em arquiteturas full-stack & back-end, cibersegurança e sistemas de alta complexidade.

Atuo com modelagem sistêmica, integração de APIs, arquitetura de software, governança técnica e proteção de dados sensíveis, com foco em confiabilidade, escalabilidade e redução de débito técnico.

Entusiasta de criptografia, computação de baixo nível, lógica aplicada à engenharia de software e desenho de sistemas resilientes.`,
  };
}
