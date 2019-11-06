import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {

	constructor(private router: RouterModule) {
	}
}
