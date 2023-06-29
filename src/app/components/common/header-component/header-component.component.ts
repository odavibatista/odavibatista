import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
  adjustNavbarOnResolution() {
    const threshold = 991
    const navLinks: any = document.querySelectorAll('.nav-link')
    
    if(window.innerWidth <= threshold) {
      //@ts-ignore
      navLinks.forEach(link => {
        link.dataset.bsToggle = 'collapse'
        link.dataset.bsTarget = '#navbarSupportedContent'
      });
    }
    else {
      //@ts-ignore
      navLinks.forEach(link => {
        delete link.dataset.bsToggle;
        delete link.dataset.bsTarget;
      });
    }
  }
  
}
