import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {
  @Input() cardInfo = {
    imgUrl: "",
    title: "",
    description: "",
    deployUrl: "",
    ghUrl: "",
    docs: "",
    figmaUrl: "",
    dbUrl: ""
  }
}
