import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../services/entry.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'income',
    templateUrl: './income.component.html',
    styleUrls: [ './table.css' ],
})

export class IncomeComponent implements OnInit {
    income: Entry[] = [];
    incomeTotal: number;

    constructor(
        private entryService: EntryService,
        private router: Router) { }

    getIncome(): void {
        this.entryService.getEntries()
        .then(items => {
            this.incomeTotal = 0;
            for (var i=0; i < items.length; i++) {
                if (items[i].id >= 1000 && items[i].id < 2000) {
                    this.income.push(items[i]);
                    this.incomeTotal += items[i].amount;
                }
            }
            this.entryService.bubbleSort(this.income);
        });
    }

    ngOnInit(): void {
        this.getIncome();
    }

    onEdit(entry: Entry) {
        this.router.navigate(['/edit', entry.id]);
    }

    private addIncome() {
        var newId = this.getNewId();
        this.router.navigate(['/new/id', newId]);
    }

    private getNewId() {
        var idFound = false;
        for(var i=0; i<this.income.length; i++) {
            var tempId = i + 1001;

            for(var j=0; j<this.income.length; j++) {
                if (this.income[j].id == tempId) {
                    idFound = true;
                }
            }

            if (idFound == false) {
                return tempId;
            }

        }

        return this.income.length + 1001;

    }
}