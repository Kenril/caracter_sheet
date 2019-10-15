import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";


@Component({
	selector: 'app-base-info',
	templateUrl: './base-info.component.html',
	styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {

	public nom: string = "";
	public prenom: string = "";
	public phrase: string = "";

	public caracteristiques: Map<string, number>;

	constructor() {
	}

	ngOnInit() {
	}

	log(info: string): void {
		if (!environment.production) {
			console.log(info);
		}
	}

	saveFullName(): void {
		this.phrase = "Bonjour " + this.prenom + " " + this.nom;
	}

	printFullName(): string {
		return this.phrase;
	}

}
