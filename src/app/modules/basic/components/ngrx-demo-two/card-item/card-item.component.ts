import { Component, Input, OnInit } from '@angular/core';
import {IJoke} from '@app/modules/basic/components/ngrx-demo-two/models/card.model';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
    @Input() joke: IJoke;

    constructor() {}

    ngOnInit() {}
}
