
import { MainComponent } from './components/main/main.component';
import { JailComponent } from './components/jail/jail.component';
import { FinesComponent } from './components/fines/fines.component';
import { PlateSearcherComponent } from './components/plate-searcher/plate-searcher.component';
import { WarrantComponent } from './components/warrant/warrant.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolosComponent } from './components/bolos/bolos.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'jail', component: JailComponent},
  {path:'fines', component: FinesComponent},
  {path:'plate-searcher', component: PlateSearcherComponent},
  {path:'warrants', component: WarrantComponent},
  {path:'bolos', component: BolosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

