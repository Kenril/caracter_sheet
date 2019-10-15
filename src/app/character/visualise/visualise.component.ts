import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../character";

@Component({
	selector: 'app-visualise',
	templateUrl: './visualise.component.html',
	styleUrls: ['./visualise.component.scss']
})
export class VisualiseComponent implements OnInit {

	public character: Character;

	constructor() {
	}

	ngOnInit() {
	}

}
