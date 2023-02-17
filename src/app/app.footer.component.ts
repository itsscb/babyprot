import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
			<div class="icons">
				<div class="icon icon-hastag">
					<a href="/">
					<i class="pi pi-home"></i>
</a>
				</div>
				<div class="icon icon-briefcase">
					<a href="#/impressum">
					<i class="pi pi-briefcase"></i>
</a>
				</div>
				<div class="icon icon-prime">
					<a href="#/kontakt">
					<i class="pi pi-at"></i>
</a>
				</div>
			</div>
        </div>
    `
})
export class AppFooterComponent {

}
