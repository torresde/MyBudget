import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Entry } from '../entry';
import { EntryService } from '../services/entry.service';

@Component({
    selector: 'entry-detail',
    templateUrl: './entry-detail.component.html',
    styleUrls: [ './detail.component.css' ],
})

export class EntryDetailComponent implements OnInit{
    entry: Entry;
    type: string;

    constructor(
        private entryService: EntryService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.entryService.getEntry(+params['id']))
        .subscribe(entry => {
            this.entry = entry;
            this.getType();
        });
    }

    private goBack(): void {
        this.location.back();
    }

    private save(): void {
        // Data that is modified becomes a string
        // This converts any data that may have become a string
        this.entry.amount = parseInt(this.entry.amount);
        this.entry.month = parseInt(this.entry.month);
        this.entry.day = parseInt(this.entry.day);
        this.entry.year = parseInt(this.entry.year);
        
        this.entryService.update(this.entry)
        .then(() => this.goBack());
    }

    private delete(): void {
        this.entryService.delete(this.entry.id)
            .then(() => this.goBack());
}

    private getType() {
        if(this.entry.id >=1000 && this.entry.id < 2000) {
            this.type = "Income";
        }else if(this.entry.id >=2000 && this.entry.id < 3000) {
            this.type = "Bill";
        }else if(this.entry.id >=3000 && this.entry.id < 4000) {
            this.type = "Expense";
        }
    }
}