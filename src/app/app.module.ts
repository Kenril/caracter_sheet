import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BaseInfoComponent} from './base-info/base-info.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './character/create/create.component';
import { VisualiseComponent } from './character/visualise/visualise.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditComponent } from './character/edit/edit.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		BaseInfoComponent,
		HeaderComponent,
		CreateComponent,
		VisualiseComponent,
		SidebarComponent,
		EditComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
