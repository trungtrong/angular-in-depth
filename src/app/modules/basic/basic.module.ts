import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import { SvgIconsRegistry } from 'app/theme/services/svg-icons.service';
import {
    svgIconFacebook,
    svgIconInstagram
} from 'assets/images/icons/lib/svg-icons.model';
//
import { BasicComponent } from './basic.component';
import {
    SvgLibraryComponent,
    SvgExampleOneComponent,
    BasicRoutingComponent,
} from '@app/modules/basic/components';

const COMPONENTS = [
    BasicComponent,
    //
    SvgLibraryComponent,
    SvgExampleOneComponent,
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
                    loadChildren: () => import('./components/change-detector/change-detector.module').then(m => m.ChangeDetectorModule)
                },
                {
                    path: 'svg-icon-library',
                    component: SvgLibraryComponent,
                },
                {
                    path: 'routing',
                    loadChildren: () => import('./components/routing/routing.module').then(m => m.RoutingModule),
                    // data: {
                    //     preload: false
                    // }
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
    constructor(private svgIconRegistry: SvgIconsRegistry) {
        svgIconRegistry.registerIcons([
            svgIconFacebook,
            svgIconInstagram
        ])
    }
}
