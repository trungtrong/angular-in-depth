import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pure-impure-pipes',
    templateUrl: 'pure-impure-pipes.component.html',
    styleUrls: ['./pure-impure-pipes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PureImpurePipesComponent implements OnInit {
    length: number = 1;
    //
    inputValue: string;
    name: string;

    constructor() {

    }

    ngOnInit() {
    }

    /**
     * Pipe handler
     */
    // b/c compileHandler is callback (closure) => "this" - context is different with this of component
    compileHandler = (name: string): string => {
        console.log('compile - function pipe', this.inputValue);
        //
        return btoa(name);
    }

    asyncValidationCallback = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
}
