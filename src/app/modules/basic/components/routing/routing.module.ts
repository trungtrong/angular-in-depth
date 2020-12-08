import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import { BasicRoutingComponent } from './routing.component';
import { ChildOneRoutingIdComponent } from './child-one-routing-id/child-one-routing-id.component';

const COMPONENTS = [
    BasicRoutingComponent,
    ChildOneRoutingIdComponent
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
            component: BasicRoutingComponent,
            children: [
                {
                    path: ':id',
                    component: ChildOneRoutingIdComponent,
                }
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
export class RoutingModule {
}
