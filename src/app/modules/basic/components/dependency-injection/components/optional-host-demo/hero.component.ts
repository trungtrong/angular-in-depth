import {Component} from '@angular/core';
import {HeroService} from '@app/modules/basic/components/dependency-injection/services/hero.service';

@Component({
    selector: 'app-hero',
    template: `<div>Hi I'm Hero</div>`,
    providers: [HeroService]
})
export class HeroComponent {

}
