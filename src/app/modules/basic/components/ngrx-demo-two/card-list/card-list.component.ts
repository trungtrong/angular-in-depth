import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IJoke} from '@app/modules/basic/components/ngrx-demo-two/models/card.model';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    @Input() jokes: IJoke[];
    @Input() loading: boolean;
    @Input() error: any;

    @Output() loadAllRequested = new EventEmitter();
    @Output() loadCategoryRequested = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}
}
