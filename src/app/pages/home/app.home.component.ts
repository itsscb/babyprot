import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Protocol } from 'src/app/models/babyprot.model';
import { BabyprotService } from 'src/app/services/babyprot.service';
import {BreadcrumbService} from '../../breadcrumb.service';
@Component({
    styleUrls: ['./app.home.component.css'],
    templateUrl: './app.home.component.html',
    providers: [MessageService, ConfirmationService]
})
export class AppHomeComponent implements OnInit {
    loading: boolean = true
    prot: Protocol[]
    constructor(private babyprotService: BabyprotService,private messageService: MessageService,
                private confirmationService: ConfirmationService, private breadcrumbService: BreadcrumbService) {
                    
    }
 
    ngOnInit() {
        this.loading = true
        this.babyprotService.getProtocol().subscribe((p: Protocol[]) => {
            this.prot = p
            console.log(this.prot)
            this.prot.forEach((p) => {
                console.log(p.Kind.Name)
            })
            this.loading = false
        })
        // console.log(this.prot)
    }

}