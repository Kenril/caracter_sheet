import {CharacterModel} from "../model/character.model";
import {StoreService} from "./store.service";

export class CharacterStore extends StoreService<CharacterModel> {

	protected data: CharacterModel;

  constructor() {
	  super();
  }
}
