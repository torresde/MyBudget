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
var entry_service_1 = require("../services/entry.service");
var EntryDetailComponent = (function () {
    function EntryDetailComponent(entryService, route, location) {
        this.entryService = entryService;
        this.route = route;
        this.location = location;
    }
    EntryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.entryService.getEntry(+params['id']); })
            .subscribe(function (entry) {
            _this.entry = entry;
            _this.getType();
        });
    };
    EntryDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    EntryDetailComponent.prototype.save = function () {
        var _this = this;
        // Data that is modified becomes a string
        // This converts any data that may have become a string
        this.entry.amount = parseInt(this.entry.amount);
        this.entry.month = parseInt(this.entry.month);
        this.entry.day = parseInt(this.entry.day);
        this.entry.year = parseInt(this.entry.year);
        this.entryService.update(this.entry)
            .then(function () { return _this.goBack(); });
    };
    EntryDetailComponent.prototype.delete = function () {
        var _this = this;
        this.entryService.delete(this.entry.id)
            .then(function () { return _this.goBack(); });
    };
    EntryDetailComponent.prototype.getType = function () {
        if (this.entry.id >= 1000 && this.entry.id < 2000) {
            this.type = "Income";
        }
        else if (this.entry.id >= 2000 && this.entry.id < 3000) {
            this.type = "Bill";
        }
        else if (this.entry.id >= 3000 && this.entry.id < 4000) {
            this.type = "Expense";
        }
    };
    return EntryDetailComponent;
}());
EntryDetailComponent = __decorate([
    core_1.Component({
        selector: 'entry-detail',
        templateUrl: './entry-detail.component.html',
        styleUrls: ['./detail.component.css'],
    }),
    __metadata("design:paramtypes", [entry_service_1.EntryService,
        router_1.ActivatedRoute,
        common_1.Location])
], EntryDetailComponent);
exports.EntryDetailComponent = EntryDetailComponent;
//# sourceMappingURL=entry-detail.component.js.map