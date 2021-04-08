import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import { PureImpurePipesComponent } from './pure-impure-pipes.component';
//

import {CalculatePipe} from './pipes/calculate.pipe';

const COMPONENTS = [
    PureImpurePipesComponent
];

const PROVIDERS = [
];

const PIPES = [
    CalculatePipe
]

@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    RouterModule.forChild([
        {
            path: '',
            component: PureImpurePipesComponent,
        },

    ])
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  providers: [
      ...PROVIDERS
  ]
})
export class PipeExampleModule {

}
