import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {QuicklinkStrategy} from 'ngx-quicklink';
//
import {DefaultLayoutComponent, ErrorComponent} from './theme';
import {AuthGuard} from './shared/auth.guard';
import {CustomPreloadStrategyService} from './theme/services/custom-preload-strategy.service';

const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'basic',
                pathMatch: 'full'
            },
            {
                path: 'basic',
                loadChildren: () => import('./modules/basic/basic.module').then(m => m.BasicModule),
            },
            {
                path: 'main',
                loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
                data: {
                    preload: true
                }
            }
        ]
    },
    {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    },
    {path: '**', component: ErrorComponent} // PageNotFoundComponent
];

const config: ExtraOptions = {
    useHash: false,
    // enableTracing: true, // use to tracking/debugging router cycle, console.log on inspect
    // onSameUrlNavigation: 'reload',
    // anchorScrolling: 'enabled',
    // preloadingStrategy: CustomPreloadStrategyService
    preloadingStrategy: QuicklinkStrategy
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
