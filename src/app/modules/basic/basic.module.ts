import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import { BasicComponent } from './basic.component';
import {
    ChangeDetectorComponent,
    AComponent,
    BComponent,
    ExampleTextBoxComponent,
    ExampleTwoChildComponent,
} from '@app/modules/basic/components';

const COMPONENTS = [
    BasicComponent,
    ChangeDetectorComponent,
    //
    AComponent,
    BComponent,
    //
    ExampleTextBoxComponent,
    ExampleTwoChildComponent,
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
            component: BasicComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'change-detector',
                    pathMatch: 'full'
                },
                {
                    path: 'change-detector',
                    component: ChangeDetectorComponent,
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
export class BasicModule {
}
