import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import { MainComponent } from './main.component';


const COMPONENTS = [
    MainComponent,
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
            component: MainComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'main-example',
                    pathMatch: 'full'
                },
                {
                    path: 'main-example',
                    loadChildren: () => import('./main-example/main-example.module').then(m => m.MainExampleModule),
                    data: {
                        preload: true
                    }
                },
            ]
        },

    ])
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
      ...PROVIDERS
  ]
})
export class MainModule {

}
