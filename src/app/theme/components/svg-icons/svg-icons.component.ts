import { DOCUMENT } from '@angular/common';
import {Component, ElementRef,  Inject,  Input,  OnInit, Optional, ChangeDetectionStrategy} from '@angular/core';
import { SvgIconsRegistry } from 'app/theme/services/svg-icons.service';

@Component({
    selector: 'app-svg-icons',
    template: '<ng-content></ng-content>',
    styleUrls: ['./svg-icons.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent implements OnInit {
    private _svgIcon: SVGElement;

    @Input()
    set name(iconName: string) {
        if (this._svgIcon) {
            this.element.nativeElement.removeChild(this._svgIcon);
        }
        const svgData = this.svgIconRegistry.getIcon(iconName);
        this._svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this._svgIcon);
    }

    constructor(private element: ElementRef,
                private svgIconRegistry: SvgIconsRegistry,
                @Optional() @Inject(DOCUMENT) private document: any ) {

    }

    ngOnInit() {

    }

    private svgElementFromString(svgContent: string): SVGElement {
        const div = this.document.createElement('div');
        div.innerHTML = svgContent;
        return div.querySelector('svg')
                || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
}
