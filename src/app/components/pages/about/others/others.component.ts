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
      url: "../../../../../assets/images/techs/scrum.png",
      name: "Scrum"
    },
    
    
  ]
}
