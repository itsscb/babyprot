import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BreadcrumbService} from '../../breadcrumb.service';
@Component({
    templateUrl: './app.impressum.component.html',
    providers: [MessageService, ConfirmationService],
    // styleUrls: ['../../assets/demo/badges.scss']
})
export class AppImpressumComponent implements OnInit {

    constructor(private messageService: MessageService,
                private confirmationService: ConfirmationService, private breadcrumbService: BreadcrumbService) {
    }
 
    ngOnInit() {
    }

}