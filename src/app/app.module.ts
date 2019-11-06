import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './character/edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './character/container/container.component';
import { VueComponent } from './character/vue/vue.component';
import { TestDirective } from './directives/test.directive';

import {Route, RouterModule} from '@angular/router';
import {CharacterStore} from "./store/character.store";

const APP_ROUTE: Route[] = [
	{ path: 'creation', component: EditComponent},
	{ path: 'visualiser', component: VueComponent},
	{ path: '', redirectTo: '/creation', pathMatch: 'full'},
	{ path: '**', redirectTo: '/error'}
	// { path: '**', component: ErrorComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		EditComponent,
		FooterComponent,
		ContainerComponent,
		VueComponent,
		TestDirective,
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(APP_ROUTE)
	],
	providers: [CharacterStore],
	bootstrap: [AppComponent]
})
export class AppModule {
}
