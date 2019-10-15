import { Component } from '@angular/core';
import {Character} from "./character/character";

@Component({
  selector: 'character-creation',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public activeTab: string = "Create";

	saveCharacter(character: Character): void {
		console.log(character);
		// TODO: call to store component for storage
	}

	changeTab(tab: string) {
		this.activeTab = tab;
	}
}
