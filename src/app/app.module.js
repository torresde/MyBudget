"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./Services/in-memory-data.service");
var entry_service_1 = require("./services/entry.service");
var entry_search_service_1 = require("./services/entry-search.service");
var app_component_1 = require("./components/app.component");
var header_component_1 = require("./components/header.component");
var home_component_1 = require("./components/home.component");
var income_component_1 = require("./components/income.component");
var expenses_component_1 = require("./components/expenses.component");
var entry_detail_component_1 = require("./components/entry-detail.component");
var add_entry_component_1 = require("./components/add-entry.component");
var entry_search_component_1 = require("./components/entry-search.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            home_component_1.HomeComponent,
            income_component_1.IncomeComponent,
            expenses_component_1.ExpensesComponent,
            entry_detail_component_1.EntryDetailComponent,
            add_entry_component_1.AddEntryComponent,
            entry_search_component_1.EntrySearchComponent
        ],
        providers: [
            entry_service_1.EntryService,
            entry_search_service_1.EntrySearchService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map