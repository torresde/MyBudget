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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var entry_1 = require("../entry");
var entry_service_1 = require("../services/entry.service");
var AddEntryComponent = (function () {
    function AddEntryComponent(entryService, route, location) {
        this.entryService = entryService;
        this.route = route;
        this.location = location;
    }
    AddEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.newId = params['id']; })
            .subscribe(function (res) { return _this.getType(); });
    };
    AddEntryComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddEntryComponent.prototype.submit = function (name, amt, month, day, year) {
        var _this = this;
        var entry = new entry_1.Entry(this.newId);
        entry.name = name;
        entry.amount = parseInt(amt);
        entry.year = parseInt(year);
        entry.month = parseInt(month);
        entry.day = parseInt(day);
        this.entryService.create(entry)
            .then(function () {
            _this.goBack();
        });
    };
    AddEntryComponent.prototype.getType = function () {
        if (this.newId >= 1000 && this.newId < 2000) {
            this.type = "Income";
        }
        else if (this.newId >= 2000 && this.newId < 3000) {
            this.type = "Bill";
        }
        else if (this.newId >= 3000 && this.newId < 4000) {
            this.type = "Expense";
        }
    };
    return AddEntryComponent;
}());
AddEntryComponent = __decorate([
    core_1.Component({
        selector: 'add-entry',
        templateUrl: './add-entry.component.html',
        styleUrls: ['./detail.component.css'],
    }),
    __metadata("design:paramtypes", [entry_service_1.EntryService,
        router_1.ActivatedRoute,
        common_1.Location])
], AddEntryComponent);
exports.AddEntryComponent = AddEntryComponent;
//# sourceMappingURL=add-entry.component.js.map