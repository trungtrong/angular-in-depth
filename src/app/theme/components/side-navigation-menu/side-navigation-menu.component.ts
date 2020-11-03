import {
  Component, Output, Input, EventEmitter,
  ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit
} from '@angular/core';
import {DxTreeViewComponent} from 'devextreme-angular/ui/tree-view';
import * as events from 'devextreme/events';


@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent implements OnInit {
  pages = [
    {
      routerLink: '/home',
      text: 'Home',
      icon: '<i class="fas fa-store"></i>'
    },
    {
      routerLink: '/basic',
      text: 'Basic Concept',
      icon: ' <i class="fas fa-user-friends"></i>'
    }
  ];

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }
}
