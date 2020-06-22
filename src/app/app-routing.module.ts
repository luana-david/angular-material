import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgesComponent } from './badges/badges.component';
import { IconsComponent } from './icons/icons.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {path: '', redirectTo: "buttons", pathMatch: 'full'},
  {path: "buttons", component: ButtonsComponent},
  {path: "badges", component: BadgesComponent},
  {path: "icons", component: IconsComponent},
  {path: "progress-spinner", component: ProgressSpinnerComponent},
  {path: "menu", component: MenuComponent},
  {path: "list", component: ListComponent},
  {path: "sidenav", component: SidenavComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
