import { Injectable } from '@angular/core';
import { Entry } from '../entry';

import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';

@Injectable()
export class EntryService {

    private entriesUrl = 'api/entries';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    public getEntries(): Promise<Entry[]> {

        return this.http.get(this.entriesUrl)
               .toPromise()
               .then(response => response.json().data as Entry[])
               .catch(this.handleError);
    }

    public getEntry(id: number): Promise<Entry> {
        const url = `${this.entriesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Entry)
            .catch(this.handleError);
    }

    public update(entry: Entry): Promise<Entry> {
        const url = `${this.entriesUrl}/${entry.id}`;
        return this.http
            .put(url, JSON.stringify(entry), {headers: this.headers})
            .toPromise()
            .then(() => entry)
            .catch(this.handleError);
    }

    public bubbleSort(array: Entry[]) {
        var swapped: boolean = false;
        do {
            swapped = false;
            for (var i=0; i<array.length-1; i++) {
                if (this.isAfter(array[i+1], array[i])) {
                    var temp = array[i+1];
                    array[i+1] = array[i];
                    array[i] = temp;
                    swapped = true;
                }
            }
        } while (swapped)
    }

    private isAfter(first: Entry, second: Entry) : boolean {
        if (first.year > second.year) {
            return true;
        } else if (second.year > first.year) {
            return false;
        } else if (first.year == second.year) {
            if (first.month > second.month) {
                return true;
            } else if (second.month > first.month) {
                return false;
            } else if (first.month == second.month) {
                if (first.day > second.day) {
                    return true;
                } else if (first.day < second.day) {
                    return false
                } else {
                    return false;
                }
            }
        }
    }

    public create(entry: Entry): Promise<void> {
        return this.http
            .post(this.entriesUrl, JSON.stringify(entry), {headers: this.headers})
            .toPromise()
            .then(res => {
                res.json().data as Entry
            })
            .catch(this.handleError)
    }

    delete(id: number): Promise<void> {
        const url = `${this.entriesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
}