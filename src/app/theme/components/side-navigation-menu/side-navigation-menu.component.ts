import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-side-navigation-menu',
    templateUrl: './side-navigation-menu.component.html',
    styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent implements OnInit {
    pages = [
        {
            id: '1_1',
            routerLink: '/basic/change-detector',
            text: 'Change Detection',
            icon: ' <i class="fas fa-user-friends"></i>',
        },
        {
            id: '1_2',
            routerLink: '/basic/svg-icon-library',
            text: 'SVG Icon Library',
            icon: ' <i class="fas fa-user-friends"></i>',
        },
        {
            id: '1_3',
            routerLink: '/basic/routing',
            text: 'Routing',
            icon: ' <i class="fas fa-user-friends"></i>',
        },
        {
            id: '1_4',
            routerLink: '/basic/pipes',
            text: 'Pipes',
            icon: ' <i class="fas fa-user-friends"></i>',
        },
        {
            id: '1_5',
            routerLink: '/basic/observables',
            text: 'Observables',
            icon: ' <i class="fas fa-user-friends"></i>',
        },
        {
            id: '1_6',
            routerLink: '/basic/ngRx-demo-one',
            text: 'NgRx Demo One',
            icon: ' <i class="fas fa-user-friends"></i>',
        },
        {
            id: '1_8',
            routerLink: '/basic/ngRx-demo-two',
            text: 'NgRx Demo Two',
            icon: ' <i class="fas fa-user-friends"></i>',
        },
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToPage(e: any) {
        this.router.navigate([`${e.itemData.routerLink}`]).then();
    }
}
