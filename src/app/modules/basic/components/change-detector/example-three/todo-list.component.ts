import {Component,Input, ChangeDetectionStrategy, Output, EventEmitter, AfterViewChecked, OnChanges, AfterViewInit} from '@angular/core';
//
import {Todo} from './todo.model';

@Component({
    selector: 'app-todo-list',
    // uncomment to switch to on-push mode
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <ul>
            <li *ngFor="let item of todos;">
                <app-todo-item [todo]="item"
                               (toggle)="onToggle($event)">
                </app-todo-item>
            </li>
        </ul>
        <button (click)="blowup()">Trigger Change Detection Loop</button>
    `
})

export class TodoListComponent implements AfterViewChecked, OnChanges, AfterViewInit {
    @Input() todos: Todo[];

    @Input() callback: Function;

    @Output() addTodo = new EventEmitter<object>();

    clicked = false;

    onToggle(todo) {
        console.log('toggling todo..');
        todo.completed = !todo.completed;

    }

    blowup() {
        console.log('Trying to blow up change detection...');
        this.clicked = true;
        this.addTodo.emit(null);
    }

    ngAfterViewChecked() {
        if (this.callback && this.clicked) {
            console.log('changing status ...');
            this.callback(Math.random());
        }

    }

    ngAfterViewInit() {

    }

    ngOnChanges() {

    }
}
