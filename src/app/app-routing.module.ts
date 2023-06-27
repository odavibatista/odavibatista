import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { TalkToMeComponent } from './components/pages/talk-to-me/talk-to-me.component';
import { ServicesComponent } from './components/pages/services/services.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'talk+to+me', component: TalkToMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
