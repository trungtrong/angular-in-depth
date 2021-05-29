import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ThemeModule} from '@app/theme';
import {SharedModule} from '@app/shared/shared.module';
//
import {BasicRoutingComponent} from './routing.component';
import {ChildOneRoutingIdComponent} from './child-one-routing-id/child-one-routing-id.component';
import {
    ArticleDetailComponent,
    ArticleListComponent, CanDeactiveWithoutGuardComponent, FormEditComponent
} from '@app/modules/basic/components/routing';
//
import {
    UsersComponent,
    CanActivateGuard,
    UserResolver,
    AuthService, MockUserDataService
} from '@app/modules/basic/components/routing/user';
import {PipeExampleModule} from '@app/modules/basic/components/pipe-example/pure-impure-pipes.module';
import {CanDeactiveGuard} from '@app/services/guards/can-deactive.guard';
//
const COMPONENTS = [
    BasicRoutingComponent,
    ChildOneRoutingIdComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    //
    UsersComponent,
    //
    CanDeactiveWithoutGuardComponent,
    FormEditComponent
];

const PROVIDERS = [
    AuthService,
    CanActivateGuard,
    UserResolver,
    MockUserDataService
];

@NgModule({
    imports: [
        ThemeModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: BasicRoutingComponent,
                canActivateChild: [CanActivateGuard],
                children: [
                    {
                        path: 'article',
                        component: ArticleListComponent,
                        children: [
                            {
                                path: ':slug',
                                component: ArticleDetailComponent
                            }
                        ]
                    },
                    {
                        path: 'users',
                        component: UsersComponent,
                        canActivate: [CanActivateGuard],
                        resolve: {
                            users: UserResolver
                        }
                    },
                    {
                        path: 'can-deactive',
                        component: CanDeactiveWithoutGuardComponent,
                        canDeactivate: [CanDeactiveGuard]
                    }
                ]
            },
        ]),
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class RoutingModule {
}
