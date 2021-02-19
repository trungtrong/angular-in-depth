import {AfterViewChecked, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from './todo.model';


@Component({
    selector: 'app-todo-item',
    template: `
        <h3>TODO Item</h3>
        <span class="todo noselect" (click)="onToggle()">
            {{todo.owner.firstName}} - {{todo.description}} - completed: {{todo.completed}}
        </span>
    `,
})
export class TodoItemComponent implements AfterViewChecked, DoCheck {
    @Input() todo: Todo;

    @Output() toggle = new EventEmitter<object>();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    ngAfterViewChecked() {
        console.log('todo-item-after view checked');
    }

    ngDoCheck() {
       console.log('a');
    }
}
