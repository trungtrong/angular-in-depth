import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from './todo.model';


@Component({
    selector: 'app-todo-item',
    template: `
        <span class="todo noselect" (click)="onToggle()">
            {{todo.owner.firstName}} - {{todo.description}} - completed: {{todo.completed}}
        </span>
    `
})
export class TodoItemComponent implements AfterViewChecked {
    @Input() todo: Todo;

    @Output() toggle = new EventEmitter<object>();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    ngAfterViewChecked() {

    }
}
