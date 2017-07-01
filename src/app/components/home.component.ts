import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../services/entry.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [ './table.css', './home-bars.css' ]
})

export class HomeComponent implements OnInit {
    allEntries: Entry[];
    recentEntries: Entry[] = [];
    entries: Entry[] = [];
    showingAll: boolean = false;
    totalIncome: number = 0;
    totalExpense: number = 0;
    incomeBar: number = 0;
    expenseBar: number = 0;

    constructor(
        private entryService: EntryService,
        private router: Router) { }

    private getEntries(): void {
        this.entryService.getEntries()
        .then(items => {
            this.allEntries = items;
            this.entryService.bubbleSort(this.allEntries);
            
            if (this.allEntries.length > 4) {
                for (var i=0; i<4; i++) {
                    this.recentEntries.push(this.allEntries[i]);
                }
            }

            this.entries = this.recentEntries;
            for (var i=0; i<this.allEntries.length; i++) {
                if (this.allEntries[i].id < 2000) {
                    this.totalIncome += this.allEntries[i].amount;
                } else {
                    this.totalExpense += this.allEntries[i].amount;
                }
            }

            if (this.totalIncome > this.totalExpense) {
                this.incomeBar = 700;
                this.expenseBar = (this.totalExpense / this.totalIncome) * 700;
            } else if (this.totalExpense > this.totalIncome) {
                this.expenseBar = 700;
                this.incomeBar = (this.totalIncome / this.totalExpense) * 700;
            } else {
                this.incomeBar = 700;
                this.expenseBar = 700;
            }
        });
    }

    ngOnInit(): void {
        this.getEntries();
    }

    private onEdit(entry: Entry) {
        this.router.navigate(['/edit', entry.id]);
    }

    private showAll() {
        this.entries = this.allEntries;
        this.showingAll = true;
    }

    private showLess() {
        this.entries = this.recentEntries;
        this.showingAll = false;
    }

}