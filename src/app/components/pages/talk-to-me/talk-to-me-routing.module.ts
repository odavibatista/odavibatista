import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkToMeComponent } from './talk-to-me.component';

const routes: Routes = [{ path: '', component: TalkToMeComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalkToMeRoutingModule { }
