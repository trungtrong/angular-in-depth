import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';


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

const PROVIDERS = [];
//
const routes: Routes = [
    {
        path: '',
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
