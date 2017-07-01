import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Entry } from '../entry';

@Injectable()
export class EntrySearchService{

    constructor(private http: Http) {}
 
    search(term: string): Observable<Entry[]> {
        return this.http
                .get(`api/entries/?name=${term}`)
                .map(response => response.json().data as Entry[]);
    }

}