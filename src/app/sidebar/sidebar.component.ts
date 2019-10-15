import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	public tabs: string[] = ["Create", "Visualize"];
	public selectedItem: string = "Create";
	public active: string;
	@Output() sendEvent: EventEmitter<string> = new EventEmitter<string>();

	constructor() {
	}

	ngOnInit() {
	}

	changeActive(event, newValue): void {
		console.log(newValue);
		this.active = newValue;
	}

	send(): void {
		this.sendEvent.emit(this.active);
	}


}
