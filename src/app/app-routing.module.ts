import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { fader } from './route.animations';


const routes: Routes = [
  { path: '', component: IndexComponent, data: { animation: fader } },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then((m) => m.AboutModule), data: { animation: fader } },
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then((m) => m.ServicesModule), data: { animation: fader } },
  { path: 'projects', loadChildren: () => import('./components/pages/projects/projects.module').then((m) => m.ProjectsModule), data: { animation: fader } },
  { path: 'talk+to+me', loadChildren: () => import('./components/pages/talk-to-me/talk-to-me.module').then((m) => m.TalkToMeModule), data: { animation: fader } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
