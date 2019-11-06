import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

	@HostBinding('style.backgroundColor') private backgroundColor: string = 'transparent';

	constructor() { }

	@HostListener('click') click() {
		this.backgroundColor = 'cornflowerblue';
	}

	@HostListener('mouseenter') mouseIn() {
		this.backgroundColor = 'lightgrey';
	}

	@HostListener('mouseleave') mouseOut() {
		this.backgroundColor = '';
	}

}
