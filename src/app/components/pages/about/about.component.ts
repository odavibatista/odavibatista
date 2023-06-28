import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  frontEnd () {
    const frontEndBtn: any = document.querySelector('#frontEndBtn')
    const backEndBtn: any = document.querySelector('#backEndBtn')
    const othersBtn: any = document.querySelector('#othersBtn')
    const frontEndTechs: any = document.querySelector('#frontEnd')
    const backEndTechs: any = document.querySelector('#backEnd')
    const otherTechs: any = document.querySelector('#others')
    frontEndBtn.style.backgroundColor = "#181823"
    frontEndBtn.style.color = "#C0EEF2"
    backEndBtn.style.backgroundColor = "#C0EEF2"
    backEndBtn.style.color = "#181823"
    othersBtn.style.backgroundColor = "#C0EEF2"
    othersBtn.style.color = "#181823"

    frontEndTechs.style.display = "grid"
    backEndTechs.style.display = "none"
    otherTechs.style.display = "none"
  }

  backEnd ()  {
    const frontEndBtn: any = document.querySelector('#frontEndBtn')
    const backEndBtn: any = document.querySelector('#backEndBtn')
    const othersBtn: any = document.querySelector('#othersBtn')
    const frontEndTechs: any = document.querySelector('#frontEnd')
    const backEndTechs: any = document.querySelector('#backEnd')
    const otherTechs: any = document.querySelector('#others')
    frontEndBtn.style.backgroundColor = "#C0EEF2"
    frontEndBtn.style.color = "#181823"
    backEndBtn.style.backgroundColor = "#181823"
    backEndBtn.style.color = "#C0EEF2"
    othersBtn.style.backgroundColor = "#C0EEF2"
    othersBtn.style.color = "#181823"

    frontEndTechs.style.display = "none"
    backEndTechs.style.display = "grid"
    otherTechs.style.display = "none"
  }

  others()  {
    const frontEndBtn: any = document.querySelector('#frontEndBtn')
    const backEndBtn: any = document.querySelector('#backEndBtn')
    const othersBtn: any = document.querySelector('#othersBtn')
    const frontEndTechs: any = document.querySelector('#frontEnd')
    const backEndTechs: any = document.querySelector('#backEnd')
    const otherTechs: any = document.querySelector('#others')
    frontEndBtn.style.color = "#181823"
    frontEndBtn.style.backgroundColor = "#C0EEF2"
    backEndBtn.style.color = "#181823"
    backEndBtn.style.backgroundColor = "#C0EEF2"
    othersBtn.style.backgroundColor = "#181823"
    othersBtn.style.color = "#C0EEF2"

    frontEndTechs.style.display = "none"
    backEndTechs.style.display = "none"
    otherTechs.style.display = "grid"
  }
}
