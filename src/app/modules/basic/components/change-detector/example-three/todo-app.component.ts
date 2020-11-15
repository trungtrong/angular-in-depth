import {Component,Input, ChangeDetectionStrategy, Output, EventEmitter, AfterViewChecked, DoCheck} from '@angular/core';
import {Todo} from './todo.model';
import {Owner} from './owner.model';

// Refer to: https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/

@Component({
    selector: 'app-todo-app',
    template: `
        <div>
            <app-todo-list [todos]="todos"
                           (addTodo)="onAdd()"
                           [callback]="callback">
            </app-todo-list>
        </div>

        <div>{{message}}</div>

        <button (click)="toggleFirst()">Toggle First Item</button>
        <button (click)="addTodo()">Add Todo to List</button>
    `
})
export class TodoAppComponent implements AfterViewChecked, DoCheck {
    todos: Todo[] = [
        new Todo({
           id: 1,
           description: 'TODO 1',
           completed: false,
           owner: new Owner()
        }),
        new Todo({
            id: 1,
            description: 'TODO 2',
            completed: false,
            owner: new Owner()
         }),
        new Todo({
            id: 1,
            description: 'TODO 3',
            completed: false,
            owner: new Owner()
            }),

        new Todo({
        id: 1,
        description: 'TODO 3',
        completed: false,
        owner: new Owner()
        }),
    ];;

    message: string;
    callback: Function = (message) => {
        console.log('setting message...');
        this.message = message;
    };

    constructor() {

    }

    toggleFirst() {
        // Ex1:
        // this.todos[0].completed = !this.todos[0].completed;

        // Ex2: lastName is shown on template => when lastName is changed
        // No change detection run
        // this.todos[0].owner.lastName = 'hello';

        // Ex3:
        // when todo-list use OnPush()
        // =>if don't update reference for <todos> variable so todo-item don't run ngDoCheck anymore
        this.todos[0] = new Todo({
            id: 1,
            description: 'TODO 1',
            completed: true,
            owner: new Owner()
        })
        this.todos = [...this.todos];
    }

    addTodo() {
        const newTodos = this.todos.slice(0);
        newTodos.push(new Todo({
            id: 1,
            description: 'TODO 3',
            completed: false,
            owner: new Owner()
         }));
        this.todos = newTodos;
    }

    onAdd() {
        this.message = 'Adding Todo ...';
        this.addTodo();
    }

    ngAfterViewChecked() {

    }

    ngDoCheck() {
        console.log('todo-app');
    }
}
