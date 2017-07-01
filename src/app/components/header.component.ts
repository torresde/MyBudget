import { Component } from '@angular/core';

@Component ({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})

export class HeaderComponent{
    title = "Budget Application";
    tabs = [
        { name: "Home", link: "/home" },
        { name: "My Income", link: "/income" },
        { name: "My Expenses", link: "/expenses" },
    ]
}