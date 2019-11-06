import {Component, ElementRef, ViewChild} from '@angular/core';
import {CharacterModel} from "../../model/character.model";
import * as deepEquals from "fast-deep-equal";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

	@ViewChild('cName', null) cNameRef: ElementRef;
	@ViewChild('cSurname', null) cSurnameRef: ElementRef;
	@ViewChild('cNickname', null) cNicknameRef: ElementRef;
	@ViewChild('cTitle', null) cTitleRef: ElementRef;

	constructor(private characterService: CharacterService) {

	}

	private saveCharacter(): void {
		let character: CharacterModel = new CharacterModel(
			this.getValue(this.cNameRef),
			this.getValue(this.cSurnameRef),
			this.getValue(this.cNicknameRef),
			this.getValue(this.cTitleRef)
		);
		if (deepEquals(character, CharacterService.EMPTY_CHARACTER)) {
			this.characterService.saveCharacter(null);
		} else {
			this.characterService.saveCharacter(character);
		}
	}

	private getValue(elRef: ElementRef): string {
		return elRef.nativeElement.value;
	}


}
