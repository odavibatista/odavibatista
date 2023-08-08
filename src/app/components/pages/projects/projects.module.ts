import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SingleProjectComponent } from './single-project/single-project.component';
import { InformationComponent } from './single-project/information/information.component';


@NgModule({
  declarations: [
    SingleProjectComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
