import { Component } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent {
  public Others  = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      name: 'Jest'
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
      name: "Swift"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      name: "AWS"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      name: "Google Cloud"
    },
  
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-line-wordmark.svg",
      name: "Vercel"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      name: "Linux"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-line.svg",
      name: "Handlebars"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
      name: "Swagger"
    },

    {
      url: "../../../../../assets/images/techs/docker.png",
      name: "Docker"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      name: "Photoshop"
    },
    
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg",
      name: "Jira"
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original-wordmark.svg",
      name: "Trello"
    }
  ]
}
