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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var entry_search_service_1 = require("../services/entry-search.service");
// Observable imports
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var EntrySearchComponent = (function () {
    function EntrySearchComponent(entrySearchService, router) {
        this.entrySearchService = entrySearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    EntrySearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    EntrySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entries = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.entrySearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    EntrySearchComponent.prototype.gotoDetail = function (entry) {
        var link = ['/edit', entry.id];
        this.router.navigate(link);
    };
    return EntrySearchComponent;
}());
EntrySearchComponent = __decorate([
    core_1.Component({
        selector: 'entry-search',
        template: "\n        <input #searchBox\n            class=\"searchBox\"\n            placeholder=\"Search\" \n            (keyup)=\"search(searchBox.value)\"\n        />\n        <div>\n            <div *ngFor=\"let entry of entries | async\"\n                (click)=\"gotoDetail(entry); searchBox.value=''; search(searchBox.value);\" class=\"search-result\" >\n            {{entry.name}}\n            </div>\n        </div>\n        ",
        styleUrls: ['./entry-search.component.css']
    }),
    __metadata("design:paramtypes", [entry_search_service_1.EntrySearchService,
        router_1.Router])
], EntrySearchComponent);
exports.EntrySearchComponent = EntrySearchComponent;
//# sourceMappingURL=entry-search.component.js.map