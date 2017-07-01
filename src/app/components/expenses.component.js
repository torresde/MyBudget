"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var entry_service_1 = require("../services/entry.service");
var router_1 = require("@angular/router");
var ExpensesComponent = (function () {
    function ExpensesComponent(entryService, router) {
        this.entryService = entryService;
        this.router = router;
        this.expenses = [];
        this.bills = [];
    }
    ExpensesComponent.prototype.getBills = function () {
        var _this = this;
        this.entryService.getEntries()
            .then(function (items) {
            _this.totalBills = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id >= 2000 && items[i].id < 3000) {
                    _this.bills.push(items[i]);
                    _this.totalBills += items[i].amount;
                }
            }
            _this.entryService.bubbleSort(_this.bills);
        });
        ;
    };
    ExpensesComponent.prototype.getExpenses = function () {
        var _this = this;
        var entries;
        this.entryService.getEntries()
            .then(function (items) {
            _this.totalExpenses = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id >= 3000 && items[i].id < 4000) {
                    _this.expenses.push(items[i]);
                    _this.totalExpenses += items[i].amount;
                }
            }
            _this.entryService.bubbleSort(_this.expenses);
        });
        ;
    };
    ExpensesComponent.prototype.ngOnInit = function () {
        this.getBills();
        this.getExpenses();
    };
    ExpensesComponent.prototype.onEdit = function (entry) {
        this.router.navigate(['/edit', entry.id]);
    };
    ExpensesComponent.prototype.addBill = function () {
        var newId = this.getNewId(2);
        this.router.navigate(['/new/id', newId]);
    };
    ExpensesComponent.prototype.addExpense = function () {
        var newId = this.getNewId(3);
        this.router.navigate(['/new/id', newId]);
    };
    ExpensesComponent.prototype.getNewId = function (type) {
        var entArray;
        var offset;
        if (type == 2) {
            entArray = this.bills;
            offset = 2001;
        }
        else if (type == 3) {
            entArray = this.expenses;
            offset = 3001;
        }
        var idFound = false;
        for (var i = 0; i < entArray.length; i++) {
            var tempId = i + offset;
            for (var j = 0; j < entArray.length; j++) {
                if (entArray[j].id == tempId) {
                    idFound = true;
                }
            }
            if (idFound == false) {
                return tempId;
            }
        }
        return entArray.length + offset;
    };
    return ExpensesComponent;
}());
ExpensesComponent = __decorate([
    core_1.Component({
        selector: 'expenses',
        templateUrl: './expenses.component.html',
        styleUrls: ['./table.css'],
    }),
    __metadata("design:paramtypes", [entry_service_1.EntryService,
        router_1.Router])
], ExpensesComponent);
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=expenses.component.js.map