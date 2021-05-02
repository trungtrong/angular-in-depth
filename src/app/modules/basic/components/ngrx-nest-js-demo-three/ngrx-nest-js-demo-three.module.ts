import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
//
import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    ContactDetailsComponent,
    ContactDetailsContainerComponent,
    ContactEditComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactNewComponent,
    ContactsIndexComponent, ContactsToolbarComponent,
    NgrxNestJsDemoThreeComponent
} from '@app/modules/basic/components/ngrx-nest-js-demo-three';
//
import {ContactsService} from '@app/modules/basic/components/ngrx-nest-js-demo-three/services/contacts.service';
import {ContactsStoreFacade} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/contacts.store-facade';
import * as ContactsSelector from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/selectors/contacts.selector';
import {EffectsModule} from '@ngrx/effects';
import {ContactsEffects} from '@app/modules/basic/components/ngrx-nest-js-demo-three/store/effects/contacts.effect';

//
const COMPONENTS = [
    NgrxNestJsDemoThreeComponent,
    ContactDetailsComponent,
    ContactDetailsContainerComponent,
    ContactEditComponent,
    ContactFormComponent,
    ContactNewComponent,
    ContactListComponent,
    ContactsIndexComponent,
    ContactsToolbarComponent
];

const PROVIDERS = [
    ContactsService,
    ContactsStoreFacade
];
//
const routes: Routes = [
    {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: NgrxNestJsDemoThreeComponent,
        children: [
            {
                path: '',
                component: ContactsIndexComponent,
                data: {title: 'Contacts index'},
                // resolve: {title: TitleResolver}
            },
            {
                path: 'new',
                component: ContactNewComponent,
                data: {title: 'New contact'},
                // resolve: {title: TitleResolver}
            },
            {
                path: ':contactId',
                component: ContactDetailsComponent,
                data: {title: 'Contact details'},
                // resolve: {title: TitleResolver}
            },
            {
                path: ':contactId/edit',
                component: ContactEditComponent,
                data: {title: 'Edit contact'},
                // resolve: {title: TitleResolver}
            }
        ]
    }
];

//

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        //
        RouterModule.forChild(routes),
        // Config Store for FeatureModule
        StoreModule.forFeature(ContactsSelector.ContactsFeatureKey, ContactsSelector.reducers),
        EffectsModule.forFeature([ContactsEffects])
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class NgrxNestJsDemoThreeModule {
}
