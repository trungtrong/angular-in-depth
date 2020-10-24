import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-alert',
  templateUrl: './header-alert.component.html',
  styleUrls: ['./header-alert.component.scss']
})

export class HeaderAlertComponent implements OnInit {

    alerts: AlertModel[] = new Array<AlertModel>();

    constructor() { }

    ngOnInit() { }
}
