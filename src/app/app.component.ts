import {Component, ViewEncapsulation} from '@angular/core';
import {CharacterStore} from "./store/character.store";

@Component({
	selector: 'character-creation',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [CharacterStore]
})
export class AppComponent {

}
