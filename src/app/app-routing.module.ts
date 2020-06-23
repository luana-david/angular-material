import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgesComponent } from './badges/badges.component';
import { IconsComponent } from './icons/icons.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputsComponent } from './inputs/inputs.component';
import { TablesComponent } from './tables/tables.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { TooltipComponent } from './tooltip/tooltip.component';


const routes: Routes = [
  {path: '', redirectTo: "buttons", pathMatch: 'full'},
  {path: "buttons", component: ButtonsComponent},
  {path: "badges", component: BadgesComponent},
  {path: "icons", component: IconsComponent},
  {path: "progress-spinner", component: ProgressSpinnerComponent},
  {path: "menu", component: MenuComponent},
  {path: "list", component: ListComponent},
  {path: "sidenav", component: SidenavComponent},
  {path: "expansion-panel", component: ExpansionPanelComponent},
  {path: "cards", component: CardsComponent},
  {path: "tabs", component: TabsComponent},
  {path: "stepper", component: StepperComponent},
  {path: "inputs", component: InputsComponent},
  {path: "tables", component: TablesComponent},
  {path: "scrolling", component: ScrollingComponent},
  {path: "tooltip", component: TooltipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
