import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent {
  public Services = [
    {
      url: '../../../../../assets/images/services/architecture.png',
      title: 'Arquitetura de Software',
      description:
        'Desenho sistemas escaláveis e sustentáveis, definindo estruturas, padrões arquiteturais e processos que reduzem débito técnico e facilitam a evolução do produto.',
    },

    {
      url: '../../../../../assets/images/services/system-integration.png',
      title: 'Integração de Sistemas',
      description:
        'Integro aplicações com APIs corporativas, gateways de pagamento, serviços governamentais, geolocalização, logística e plataformas externas.',
    },

    {
      url: '../../../../../assets/images/services/information-security.png',
      title: 'Segurança da Informação',
      description:
        'Implemento mecanismos de proteção de dados sensíveis utilizando criptografia, boas práticas OWASP, autenticação segura e mitigação de vulnerabilidades.',
    },

    {
      url: '../../../../../assets/images/techs/back-end.png',
      title: 'Performance & Escalabilidade',
      description:
        'Redução de latência, estratégias de caching, otimização de banco de dados e preparação de aplicações para suportar crescimento sustentável.',
    },

    {
      url: '../../../../../assets/images/services/tech-leading.png',
      title: 'Liderança Técnica',
      description:
        'Definição de padrões de engenharia, documentação arquitetural, revisão de código, mentoria e organização de processos de desenvolvimento.',
    },

    {
      url: '../../../../../assets/images/services/full-stack-development.png',
      title: 'Desenvolvimento Full-Stack',
      description:
        'Construção de aplicações web completas utilizando tecnologias modernas, com foco em confiabilidade, segurança e qualidade de código.',
    },
  ];
}