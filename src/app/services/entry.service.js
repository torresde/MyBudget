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
require("rxjs/add/operator/toPromise");
var http_1 = require("@angular/http");
var EntryService = (function () {
    function EntryService(http) {
        this.http = http;
        this.entriesUrl = 'api/entries';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EntryService.prototype.getEntries = function () {
        return this.http.get(this.entriesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    EntryService.prototype.getEntry = function (id) {
        var url = this.entriesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    EntryService.prototype.update = function (entry) {
        var url = this.entriesUrl + "/" + entry.id;
        return this.http
            .put(url, JSON.stringify(entry), { headers: this.headers })
            .toPromise()
            .then(function () { return entry; })
            .catch(this.handleError);
    };
    EntryService.prototype.bubbleSort = function (array) {
        var swapped = false;
        do {
            swapped = false;
            for (var i = 0; i < array.length - 1; i++) {
                if (this.isAfter(array[i + 1], array[i])) {
                    var temp = array[i + 1];
                    array[i + 1] = array[i];
                    array[i] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    };
    EntryService.prototype.isAfter = function (first, second) {
        if (first.year > second.year) {
            return true;
        }
        else if (second.year > first.year) {
            return false;
        }
        else if (first.year == second.year) {
            if (first.month > second.month) {
                return true;
            }
            else if (second.month > first.month) {
                return false;
            }
            else if (first.month == second.month) {
                if (first.day > second.day) {
                    return true;
                }
                else if (first.day < second.day) {
                    return false;
                }
                else {
                    return false;
                }
            }
        }
    };
    EntryService.prototype.create = function (entry) {
        return this.http
            .post(this.entriesUrl, JSON.stringify(entry), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            res.json().data;
        })
            .catch(this.handleError);
    };
    EntryService.prototype.delete = function (id) {
        var url = this.entriesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    EntryService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return EntryService;
}());
EntryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EntryService);
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map