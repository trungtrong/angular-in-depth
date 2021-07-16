import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    DependencyInjectionComponent,
    HeroChildComponent,
    HeroComponent,
    HeroContainerComponent,
    //
    DIColorDirective,
    DiDirectiveConfigureComponent,
} from '@app/modules/basic/components/dependency-injection';
//
import {Logger, SILENT_CONSTANT} from '@app/modules/basic/components/dependency-injection/constants/silent.constants';
import {APP_CONFIG, HERO_DI_CONFIG} from '@app/modules/basic/components/dependency-injection/constants/app-config.constants';
//
const COMPONENTS = [
    DependencyInjectionComponent,
    //
    HeroComponent,
    HeroChildComponent,
    HeroContainerComponent,
    //
    DiDirectiveConfigureComponent
];

const DIRECTIVES = [
    DIColorDirective
]

const PROVIDERS = [
    {
        provide: Logger,
        useValue: SILENT_CONSTANT
    },
    {
        provide: APP_CONFIG,
        useValue: HERO_DI_CONFIG
    }
];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: DependencyInjectionComponent,
            },
        ]),
    ],
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class DependencyInjectionModule {
}
