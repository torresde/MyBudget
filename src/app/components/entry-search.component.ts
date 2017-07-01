import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EntrySearchService } from '../services/entry-search.service';
import { Entry } from '../entry';

// Observable imports
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'entry-search',
    template: `
        <input #searchBox
            class="searchBox"
            placeholder="Search" 
            (keyup)="search(searchBox.value)"
        />
        <div>
            <div *ngFor="let entry of entries | async"
                (click)="gotoDetail(entry); searchBox.value=''; search(searchBox.value);" class="search-result" >
            {{entry.name}}
            </div>
        </div>
        `,
    styleUrls: [ './entry-search.component.css' ]
})

export class EntrySearchComponent implements OnInit {
    entries: Observable<Entry[]>
    private searchTerms = new Subject<string>();

    constructor(
        private entrySearchService: EntrySearchService,
        private router: Router
    ) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.entries = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.entrySearchService.search(term)
                : Observable.of<Entry[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Entry[]>([]);
            });
    }

    gotoDetail(entry: Entry): void {
        let link = ['/edit', entry.id];
        this.router.navigate(link);
    }
}