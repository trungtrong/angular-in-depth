import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {
    ChangeDetectorComponent,
    AComponent,
    BComponent,
    ExampleTextBoxComponent,
    ExampleTwoChildComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
} from '@app/modules/basic/components';


const COMPONENTS = [
    ChangeDetectorComponent,
    AComponent,
    BComponent,
    //
    ExampleTextBoxComponent,
    ExampleTwoChildComponent,
    //
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
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
                component: ChangeDetectorComponent,
            },

        ])
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class ChangeDetectorModule {
}
