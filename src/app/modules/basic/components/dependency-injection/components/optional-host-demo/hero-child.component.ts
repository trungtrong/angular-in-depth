import {Component, Host, Optional} from '@angular/core';
import {HeroService} from '@app/modules/basic/components/dependency-injection/services/hero.service';

@Component({
    selector: 'app-hero-child',
    template: `<div>Hello! I'm Hero Child</div>`,
})
export class HeroChildComponent {
    constructor(@Host() private heroService: HeroService) {
        if (heroService) {
            console.log('Hello! I am Hero Service');
        }
    }
}
