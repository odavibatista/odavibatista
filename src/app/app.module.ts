import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/common/header-component/header-component.component';
import { FooterComponentComponent } from './components/common/footer-component/footer-component.component';
import { IndexComponent } from './components/pages/index/index.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { TalkToMeComponent } from './components/pages/talk-to-me/talk-to-me.component';
import { NgxSplideModule } from 'ngx-splide';
import { SplashScreenComponent } from './components/common/splash-screen/splash-screen.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FrontEndComponent } from './components/pages/about/front-end/front-end.component';
import { BackEndComponent } from './components/pages/about/back-end/back-end.component';
import { OthersComponent } from './components/pages/about/others/others.component';
import { ExperiencesComponent } from './components/pages/about/experiences/experiences.component';
import { ProfileComponent } from './components/pages/about/profile/profile.component';
import { StudiesComponent } from './components/pages/about/studies/studies.component';
import { FrontEndCardComponent } from './components/pages/services/front-end-card/front-end-card.component';
import { BackEndCardComponent } from './components/pages/services/back-end-card/back-end-card.component';
import { UiDesignCardComponent } from './components/pages/services/ui-design-card/ui-design-card.component';
import { DelibitesComponent } from './components/pages/projects/delibites/delibites.component';
import { SqlEcommerceComponent } from './components/pages/projects/sql-ecommerce/sql-ecommerce.component';
import { ViviBotComponent } from './components/pages/projects/vivi-bot/vivi-bot.component';
import { OldDavidComponent } from './components/pages/projects/old-david/old-david.component';
import { VivaceHotelsComponent } from './components/pages/projects/vivace-hotels/vivace-hotels.component';
import { ExaltedDiceRollingComponent } from './components/pages/projects/exalted-dice-rolling/exalted-dice-rolling.component';
import { ProjectVeritasComponent } from './components/pages/projects/project-veritas/project-veritas.component';
import { PortolioComponent } from './components/pages/projects/portolio/portolio.component';
import { ProcessesComponent } from './components/pages/services/processes/processes.component';

export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    IndexComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    TalkToMeComponent,
    SplashScreenComponent,
    FrontEndComponent,
    BackEndComponent,
    OthersComponent,
    ExperiencesComponent,
    ProfileComponent,
    StudiesComponent,
    FrontEndCardComponent,
    BackEndCardComponent,
    UiDesignCardComponent,
    DelibitesComponent,
    SqlEcommerceComponent,
    ViviBotComponent,
    OldDavidComponent,
    VivaceHotelsComponent,
    ExaltedDiceRollingComponent,
    ProjectVeritasComponent,
    PortolioComponent,
    ProcessesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgxSplideModule,
    LottieModule.forRoot({ player: playerFactory }),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
