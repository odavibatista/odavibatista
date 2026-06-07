import { Component } from '@angular/core';

@Component({
  selector: 'app-core-expertise',
  templateUrl: './core-expertise.component.html',
  styleUrls: ['./core-expertise.component.scss']
})
export class CoreExpertiseComponent {
public CoreExpertise = [
  {
    title: 'Arquitetura de Software',
    description:
      'Modelagem de domínio, DDD, Clean Architecture, SOLID e desenho de sistemas escaláveis.'
  },
  {
    title: 'Engenharia de Segurança',
    description:
      'Criptografia, OWASP, proteção de dados sensíveis, identificadores seguros e mitigação de vulnerabilidades.'
  },
  {
    title: 'Integração de APIs',
    description:
      'Integração com serviços de pagamento, KYC, logística, geolocalização, e-mail e sistemas corporativos.'
  },
  {
    title: 'Performance & Escalabilidade',
    description:
      'Caching, Redis, otimização de consultas, redução de latência e preparação para alto volume de acessos.'
  },
  {
    title: 'Liderança Técnica',
    description:
      'Documentação, revisão de código, definição de padrões, mentoria e organização de processos de engenharia.'
  },
  {
    title: 'Cloud & DevOps',
    description:
      'CI/CD, GitHub Actions, AWS, Google Cloud, deploy, automações e infraestrutura para aplicações modernas.'
  }
];
}
