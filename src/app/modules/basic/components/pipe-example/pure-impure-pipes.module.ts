import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
import { PureImpurePipesComponent } from './pure-impure-pipes.component';
//
import {
    CalculatePipe,
    FunctionPipe
} from '@app/modules/basic/components/pipe-example/pipes';

const COMPONENTS = [
    PureImpurePipesComponent
];

const PROVIDERS = [
];

const PIPES = [
    CalculatePipe,
    FunctionPipe
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
