import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { IncomeComponent } from './components/income.component';
import { ExpensesComponent } from './components/expenses.component';
import { EntryDetailComponent } from './components/entry-detail.component';
import { AddEntryComponent } from './components/add-entry.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'edit/:id', component: EntryDetailComponent },
  { path: 'new/id/:id', component: AddEntryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }