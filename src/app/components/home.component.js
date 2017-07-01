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
var HomeComponent = (function () {
    function HomeComponent(entryService, router) {
        this.entryService = entryService;
        this.router = router;
        this.recentEntries = [];
        this.entries = [];
        this.showingAll = false;
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.incomeBar = 0;
        this.expenseBar = 0;
    }
    HomeComponent.prototype.getEntries = function () {
        var _this = this;
        this.entryService.getEntries()
            .then(function (items) {
            _this.allEntries = items;
            _this.entryService.bubbleSort(_this.allEntries);
            if (_this.allEntries.length > 4) {
                for (var i = 0; i < 4; i++) {
                    _this.recentEntries.push(_this.allEntries[i]);
                }
            }
            _this.entries = _this.recentEntries;
            for (var i = 0; i < _this.allEntries.length; i++) {
                if (_this.allEntries[i].id < 2000) {
                    _this.totalIncome += _this.allEntries[i].amount;
                }
                else {
                    _this.totalExpense += _this.allEntries[i].amount;
                }
            }
            if (_this.totalIncome > _this.totalExpense) {
                _this.incomeBar = 700;
                _this.expenseBar = (_this.totalExpense / _this.totalIncome) * 700;
            }
            else if (_this.totalExpense > _this.totalIncome) {
                _this.expenseBar = 700;
                _this.incomeBar = (_this.totalIncome / _this.totalExpense) * 700;
            }
            else {
                _this.incomeBar = 700;
                _this.expenseBar = 700;
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getEntries();
    };
    HomeComponent.prototype.onEdit = function (entry) {
        this.router.navigate(['/edit', entry.id]);
    };
    HomeComponent.prototype.showAll = function () {
        this.entries = this.allEntries;
        this.showingAll = true;
    };
    HomeComponent.prototype.showLess = function () {
        this.entries = this.recentEntries;
        this.showingAll = false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./table.css', './home-bars.css']
    }),
    __metadata("design:paramtypes", [entry_service_1.EntryService,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map