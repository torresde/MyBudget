import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './Services/in-memory-data.service';
import { EntryService } from './services/entry.service';
import { EntrySearchService } from './services/entry-search.service';

import { AppComponent }  from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { HomeComponent } from './components/home.component';
import { IncomeComponent } from './components/income.component';
import { ExpensesComponent } from './components/expenses.component';
import { EntryDetailComponent } from './components/entry-detail.component';
import { AddEntryComponent } from './components/add-entry.component';
import { EntrySearchComponent } from './components/entry-search.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IncomeComponent,
    ExpensesComponent,
    EntryDetailComponent,
    AddEntryComponent,
    EntrySearchComponent
    ],
  providers: [
    EntryService,
    EntrySearchService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
