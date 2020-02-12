import { JailInputComponent } from './jail/jail-input/jail-input.component';
import { JailInfoComponent } from './jail/jail-info/jail-info.component';
import { MainComponent } from './main/main.component';
import { JailComponent } from './jail/jail.component';
import { ActiveBolosComponent } from './active-bolos/active-bolos.component';
import { InputBolosComponent } from './input-bolos/input-bolos.component';
import { WarrantComponent } from './warrant/warrant.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'jail', component: JailComponent,
  children: [
      { path: 'jail-info', component: JailInfoComponent },
      { path: 'jail-input', component: JailInputComponent },
    ]
  },
  {path:'active-bolos', component: ActiveBolosComponent},
  {path:'input-bolos', component: InputBolosComponent},
  {path:'warrants', component: WarrantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

