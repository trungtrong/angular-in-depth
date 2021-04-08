import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    ObservableConceptComponent,
    SubscriptionConceptComponent
} from '@app/modules/basic/components/observable-concept';
//
import {SubscriptionConceptService} from '@app/modules/basic/components/observable-concept/services/subscription-concept.service';
//
const COMPONENTS = [
    ObservableConceptComponent,
    SubscriptionConceptComponent
];

const PROVIDERS = [
    SubscriptionConceptService
];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ObservableConceptComponent,
            },
        ])
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class ObservableConceptModule {
}
