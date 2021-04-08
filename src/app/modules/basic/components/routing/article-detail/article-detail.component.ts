import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
//
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { ArticleModel} from '@app/modules/basic/components/routing/article.model';

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
    article$: Observable<ArticleModel>;
    constructor(private _route: ActivatedRoute, private _api: ArticleService) {}

    ngOnInit(): void {
        // ActivatedRoute la` 1 public API, contains cac info ve route dang activated
        // associated with component ma` duoc loaded trong router-outlet


        // Way 1: use snapshot
        // snapshot is triggered only when component is initialized
        // Neu change Slug thi` khong tracking được
        /*
        const slug: string = this._route.snapshot.paramMap.get('slug');
        this.article$ = this._api.getArticleBySlug(slug);
        */

        // Way 2: Use paramMap Observable
        // paramMap là Observable nên tracking slog changed
        //
        this.article$ = this._route.paramMap.pipe(
            map((params) => params.get('slug')),
            switchMap((slug) => {
                return this._api.getArticleBySlug(slug)
            })
        );

        // Vì :slug cùng 1 component la ArticleDetailComponent
        // nên lúc initialize Angular Router sẽ tạo ArticleDetailComponent với router-outlet
        // và khi :slug change thì vì cùng 1 component, nên Angular Router không tạo lại ArticleDetail Component nua
        // ma` resuse luôn
        // nên nếu dùng snapshot để tracking :slug change thì không được
    }
}
