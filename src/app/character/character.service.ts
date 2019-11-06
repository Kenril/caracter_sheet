import { Injectable } from '@angular/core';
import {CharacterStore} from "../store/character.store";
import {CharacterModel} from "../model/character.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class CharacterService {

	public static readonly EMPTY_CHARACTER: CharacterModel = new CharacterModel();

	public characterSubject: BehaviorSubject<CharacterModel> = new BehaviorSubject<CharacterModel>(null);

  constructor(private characterStore: CharacterStore) { }

	saveCharacter(character: CharacterModel): void {
		this.characterStore.setData(character);
		this.characterSubject.next(this.characterStore.getData());
	}
}
