import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Entry } from '../entry';
import { EntryService } from '../services/entry.service';

@Component({
    selector: 'add-entry',
    templateUrl: './add-entry.component.html',
    styleUrls: [ './detail.component.css' ],
})

export class AddEntryComponent implements OnInit{
    newId: number;
    type: string;

    constructor(
        private entryService:  EntryService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.newId = params['id'])
            .subscribe(res => this.getType());
    }

    private goBack(): void {
        this.location.back();
    }

    private submit(name: string, amt: string, month: string, day:string, year: string): void {
        var entry = new Entry(this.newId);
        entry.name = name;
        entry.amount = parseInt(amt);
        entry.year = parseInt(year);
        entry.month = parseInt(month);
        entry.day = parseInt(day);

        this.entryService.create(entry)
            .then(() => {
                this.goBack();
            });
    }

    private getType() {
        if(this.newId >=1000 && this.newId < 2000) {
            this.type = "Income";
        }else if(this.newId >=2000 && this.newId < 3000) {
            this.type = "Bill";
        }else if(this.newId >=3000 && this.newId < 4000) {
            this.type = "Expense";
        }
    }
}