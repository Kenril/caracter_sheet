export class CharacterModel {
	name: string = '';
	surname: string = '';
	nickname: string = '';
	title: string = '';
	img: string = '';
	age: number = 0;
	// appearance: AppearanceModel;

	level: number = 1;
	// classSpecs: CharacterPathList;
	// characteristics: CharacterCharacteristicList;
	// spells: CharacterSpellList;
	// mastery: CharacterMasteryList;
	// skills: CharacterSkillList;

	// inventory: CharacterInventory;

	lore: string = '';

	constructor(
		name?: string,
		surname?: string,
		nickname?: string,
		title?: string,
		img?: string
	) {
		this.name = name ? name : '';
		this.surname = surname ? surname : '';
		this.nickname = nickname ? nickname : '';
		this.title = title ? title : '';
		this.img = img ? img : '';
	}
}
