export class Character {
	name: string;
	surname: string;
	nickname?: string;
	title?: string;
	img: string;

	constructor(name?: string, surname?: string, nickname?: string, title?: string, img?: string) {
		this.name = name;
		this.surname = surname;
		this.nickname = nickname;
		this.title = title;
		this.img = img;
	}
}
