import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Character} from "../character";

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	public character: Character = new Character();
	@Output() public saveCharac: EventEmitter<Character> = new EventEmitter<Character>();

	constructor() {
	}

	ngOnInit() {
	}

	saveCharacter(): void {
		this.saveCharac.emit(this.character); // no good
	}

	changeIcon(event: MouseEvent): void {
		// this.character.img = event;
	}

}
