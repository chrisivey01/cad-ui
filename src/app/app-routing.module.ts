
import { MainComponent } from './components/main/main.component';
import { JailComponent } from './components/jail/jail.component';
import { FinesComponent } from './components/fines/fines.component';
import { ActiveBolosComponent } from './components/active-bolos/active-bolos.component';
import { InputBolosComponent } from './components/input-bolos/input-bolos.component';
import { WarrantComponent } from './components/warrant/warrant.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'jail', component: JailComponent},
  {path:'fines', component: FinesComponent},
  {path:'active-bolos', component: ActiveBolosComponent},
  {path:'input-bolos', component: InputBolosComponent},
  {path:'warrants', component: WarrantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

