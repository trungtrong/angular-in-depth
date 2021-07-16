import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {SvgIconsRegistry} from '@app/modules/basic/components/svg-library/services/svg-icons.service';
import {
    svgIconFacebook,
    svgIconInstagram
} from 'assets/images/icons/lib/svg-icons.model';
//
import {BasicComponent} from './basic.component';
import {
    SvgLibraryComponent,
    SvgExampleOneComponent,
    SvgIconComponent,
    BasicRoutingComponent,
} from '@app/modules/basic/components';

const COMPONENTS = [
    BasicComponent,
    //
    SvgLibraryComponent,
    SvgExampleOneComponent,
    SvgIconComponent
];

const PROVIDERS = [];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: BasicComponent, // layout with router-outlet
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
                    },
                    {
                        path: 'pipes',
                        loadChildren: () => import('./components/pipe-example/pure-impure-pipes.module').then(m => m.PipeExampleModule),
                    },
                    {
                        path: 'observables',
                        loadChildren: () => import('./components/observable-concept/observable-concept.module').then(m => m.ObservableConceptModule),
                    },
                    // {
                    //     path: 'ngRx-demo-one',
                    //     loadChildren: () => import('./components/ngRx-demo-one/ngRx-demo-one.module').then(m => m.NgRxDemoOneModule),
                    // },
                    // {
                    //     path: 'ngRx-demo-two',
                    //     loadChildren: () => import('./components/ngrx-demo-two/ngrx-demo-two.module').then(m => m.NgrxDemoTwoModule),
                    // },
                    // {
                    //     path: 'ngrx-nest-js-demo-three',
                    //     loadChildren: () => import('./components/ngrx-nest-js-demo-three/ngrx-nest-js-demo-three.module').then(m => m.NgrxNestJsDemoThreeModule),
                    // },
                    // {
                    //     path: 'ngxs-salad-example-one',
                    //     loadChildren: () => import('./components/ngxs-salad-example-one/ngxs-salad-example-one.module').then(m => m.NgxsSaladExampleOneModule),
                    // },
                    {
                        path: 'ngxs-authentication',
                        loadChildren: () => import('./components/ngxs-authentication/ngxs-authentication.module').then(m => m.NgxsAuthenticationModule),
                    },
                    {
                        path: 'dependency-injection',
                        loadChildren: () => import('./components/dependency-injection/dependency-injection.module').then(m => m.DependencyInjectionModule)
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
export class BasicModule {
    constructor(private svgIconRegistry: SvgIconsRegistry) {
        svgIconRegistry.registerIcons([
            svgIconFacebook,
            svgIconInstagram
        ])
    }
}
