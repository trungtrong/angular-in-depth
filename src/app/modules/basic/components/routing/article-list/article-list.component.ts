import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//
import { ArticleModel} from '@app/modules/basic/components/routing/article.model';
import { ArticleService } from '../article.service';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
    articles$: Observable<ArticleModel[]>;
    constructor(private _api: ArticleService) {}

    ngOnInit(): void {
        this.articles$ = this._api.getArticles();
    }
}
