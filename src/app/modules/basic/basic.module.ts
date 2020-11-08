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
import { TodoAppComponent } from './components/change-detector/example-three/todo-app.component';
import { TodoListComponent } from './components/change-detector/example-three/todo-list.component';
import { TodoItemComponent } from './components/change-detector/example-three/todo-item.component';

const COMPONENTS = [
    BasicComponent,
    ChangeDetectorComponent,
    //
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
