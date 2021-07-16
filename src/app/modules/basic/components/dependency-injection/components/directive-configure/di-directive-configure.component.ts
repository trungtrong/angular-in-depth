import {Component} from '@angular/core';
//
import {DiDirectiveConfigureService} from '@app/modules/basic/components/dependency-injection/components/directive-configure/di-directive-configure.service';

/**
 * To prove the Components and Directives on the same element can share an injector - ElementInjector
 */
@Component({
    selector: 'app-di-directive-configure',
    templateUrl: './di-directive-configure.component.html',
    providers: [DiDirectiveConfigureService]
})
export class DiDirectiveConfigureComponent {
    constructor() {
    }
}
