import {Directive, ElementRef} from '@angular/core';
import {DiDirectiveConfigureService} from '@app/modules/basic/components/dependency-injection/components/directive-configure/di-directive-configure.service';

@Directive({
    selector: '[appDIColor]'
})
export class DIColorDirective {
    constructor(el: ElementRef,
               private diDirectiveConfigureService: DiDirectiveConfigureService) {
        el.nativeElement.style.color = 'red';
        //
        diDirectiveConfigureService.showName();
    }
}
