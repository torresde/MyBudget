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
var IncomeComponent = (function () {
    function IncomeComponent(entryService, router) {
        this.entryService = entryService;
        this.router = router;
        this.income = [];
    }
    IncomeComponent.prototype.getIncome = function () {
        var _this = this;
        this.entryService.getEntries()
            .then(function (items) {
            _this.incomeTotal = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id >= 1000 && items[i].id < 2000) {
                    _this.income.push(items[i]);
                    _this.incomeTotal += items[i].amount;
                }
            }
            _this.entryService.bubbleSort(_this.income);
        });
    };
    IncomeComponent.prototype.ngOnInit = function () {
        this.getIncome();
    };
    IncomeComponent.prototype.onEdit = function (entry) {
        this.router.navigate(['/edit', entry.id]);
    };
    IncomeComponent.prototype.addIncome = function () {
        var newId = this.getNewId();
        this.router.navigate(['/new/id', newId]);
    };
    IncomeComponent.prototype.getNewId = function () {
        var idFound = false;
        for (var i = 0; i < this.income.length; i++) {
            var tempId = i + 1001;
            for (var j = 0; j < this.income.length; j++) {
                if (this.income[j].id == tempId) {
                    idFound = true;
                }
            }
            if (idFound == false) {
                return tempId;
            }
        }
        return this.income.length + 1001;
    };
    return IncomeComponent;
}());
IncomeComponent = __decorate([
    core_1.Component({
        selector: 'income',
        templateUrl: './income.component.html',
        styleUrls: ['./table.css'],
    }),
    __metadata("design:paramtypes", [entry_service_1.EntryService,
        router_1.Router])
], IncomeComponent);
exports.IncomeComponent = IncomeComponent;
//# sourceMappingURL=income.component.js.map