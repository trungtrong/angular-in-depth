import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//
import { ArticleModel} from '@app/modules/basic/components/routing/article.model';
import { ArticleService } from '../article.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
    articles$: Observable<ArticleModel[]>;
    constructor(private router: Router,
                private _api: ArticleService) {}

    ngOnInit(): void {
        this.articles$ = this._api.getArticles();
        //
        this.router.events.subscribe((event) => {
            // event.preventDefault();
            // this.router.
        })
    }
}
