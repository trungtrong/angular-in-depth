import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  selectedRoute = '';
  menuOpened: boolean = true;
  temporaryMenuOpened = false;

  menuMode = 'shrink';
  menuRevealMode = 'expand';
  minMenuSize = 0;
  shaderEnabled = false;
  subscription: Subscription = new Subscription();

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

