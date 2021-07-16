import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Logger} from '@app/modules/basic/components/dependency-injection/constants/silent.constants.ts';

@Component({
    selector: 'app-dependency-injection',
    templateUrl: 'dependency-injection.component.html',
    styleUrls: ['./dependency-injection.component.scss'],
})

export class DependencyInjectionComponent implements OnInit, OnDestroy {
    constructor(@Inject(Logger ) logger) {
        console.log(logger.logs);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
