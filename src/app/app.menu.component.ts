import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {
                label: 'Docs', icon: 'pi pi-fw pi-book', routerLink: ['/documentation']
            },
            {
                label: 'Impressum', icon: 'pi pi-fw pi-briefcase', routerLink: ['/impressum']
            },{
                label: 'Kontakt', icon: 'pi pi-fw pi-at', routerLink: ['/kontakt']
            }
        ];
    }

    onMenuClick() {
        this.appMain.menuClick = true;
    }
}
