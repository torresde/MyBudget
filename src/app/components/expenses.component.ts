import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../services/entry.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'expenses',
    templateUrl: './expenses.component.html',
    styleUrls: [ './table.css' ],
})

export class ExpensesComponent implements OnInit {
    expenses: Entry[] = [];
    bills: Entry[] = [];
    totalExpenses: number;
    totalBills: number;

    constructor(
        private entryService: EntryService,
        private router: Router) { }

    getBills(): void {
        this.entryService.getEntries()
        .then(items => {
            this.totalBills = 0;
            for (var i=0; i < items.length; i++) {
                if (items[i].id >= 2000 && items[i].id < 3000) {
                    this.bills.push(items[i]);
                    this.totalBills += items[i].amount;
                }
            }
            this.entryService.bubbleSort(this.bills);
        });;
    }

    getExpenses(): void {
        var entries: Entry[];
        this.entryService.getEntries()
        .then(items => {
            this.totalExpenses = 0;
            for (var i=0; i < items.length; i++) {
                if (items[i].id >= 3000 && items[i].id < 4000) {
                    this.expenses.push(items[i]);
                    this.totalExpenses += items[i].amount;
                }
            }
            this.entryService.bubbleSort(this.expenses);
        });;
    }

    ngOnInit(): void {
        this.getBills();
        this.getExpenses();
    }

    onEdit(entry: Entry) {
        this.router.navigate(['/edit', entry.id]);
    }

    private addBill() {
        var newId = this.getNewId(2);
        this.router.navigate(['/new/id', newId]);
    }

    private addExpense() {
        var newId = this.getNewId(3);
        this.router.navigate(['/new/id', newId]);
    }

    private getNewId(type: number) {
        var entArray;
        var offset: number;
        if(type == 2) {
            entArray = this.bills;
            offset = 2001;
        } else if (type == 3) {
            entArray = this.expenses;
            offset = 3001;
        }

        var idFound = false;
        for(var i=0; i<entArray.length; i++) {
            var tempId = i + offset;

            for(var j=0; j<entArray.length; j++) {
                if (entArray[j].id == tempId) {
                    idFound = true;
                }
            }

            if (idFound == false) {
                return tempId;
            }

        }

        return entArray.length + offset;

    }
}