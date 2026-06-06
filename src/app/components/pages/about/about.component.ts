import { Component } from '@angular/core';

type TechTab =
  | 'frontend'
  | 'backend'
  | 'others';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  activeTab: TechTab = 'frontend';

  links = [
    'https://www.linkedin.com/in/odavibatista/details/certifications/'
  ];

  selectTab(tab: TechTab): void {
    this.activeTab = tab;
  }
}