import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `<h3>Users Component</h3>
             <h5>Users</h5>
             <div *ngFor="let user of users">
              {{user}}
             </div>
  `
})
export class UsersComponent implements OnInit {
    public users = [];

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.users = data.users || [];
        });
    }
}
