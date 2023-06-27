import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
  options: AnimationOptions = {    
    path: '/assets/lottie/computer.json'  
  };  

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }
}
