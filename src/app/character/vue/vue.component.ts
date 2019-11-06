import {Component, OnDestroy, OnInit} from '@angular/core';
import { CharacterModel } from "../../model/character.model";
import {CharacterService} from "../character.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss']
})
export class VueComponent implements OnInit, OnDestroy {

	private character: CharacterModel;
	private characterSub: Subscription;

	constructor(private characterService: CharacterService) {
	}

	ngOnInit(): void {
		this.characterSub = this.characterService.characterSubject.subscribe((character) => {this.character = character});
	}

	ngOnDestroy() {
		this.characterSub.unsubscribe();
	}

}
