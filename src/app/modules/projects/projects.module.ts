import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from './../..//theme';
import {SharedModule} from './../../shared/shared.module';
import { ProjectsComponent } from './projects.component';


const COMPONENTS = [
];

const PROVIDERS = [
];

@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent
      }
    ])
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
      ...PROVIDERS
  ]
})
export class ProjectsModule {
}
