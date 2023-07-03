import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actual-study',
  templateUrl: './actual-study.component.html',
  styleUrls: ['./actual-study.component.scss']
})
export class ActualStudyComponent {
  @Input() study =  {
    imgUrl: "",
    title: "",
    conclusion: 1,
    description: ""
  }
}
