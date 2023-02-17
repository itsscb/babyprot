import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BreadcrumbService} from '../../breadcrumb.service';
@Component({
    templateUrl: './app.kontakt.component.html',
    providers: [MessageService, ConfirmationService],
    // styleUrls: ['../../assets/demo/badges.scss']
})
export class AppKontaktComponent implements OnInit {
    mailBody: string
    mailSubject: string;
    mailLink: string;
    privacyConfirmed: boolean;
    constructor(private messageService: MessageService,
                private confirmationService: ConfirmationService, private breadcrumbService: BreadcrumbService) {
    }
 
    ngOnInit() {
    }

    sendMail(): void {
        // window.location.href = 'mailto:richard@senfe.de?subject='+this.mailSubject +'?body='+this.mailBody
        const link = ('mailto:richard@senfe.de?subject='+this.mailSubject +'&body='+this.mailBody.replace(/(?:\r\n|\r|\n)/g, '%0D%0A'))
        console.log(link)
        const mail = document.createElement("a")
        mail.href=link
        mail.click()
    }
}