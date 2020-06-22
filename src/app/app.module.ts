import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    MenuComponent,
    ListComponent,
    SidenavComponent,
    ExpansionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
