import { APP_BASE_HREF } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MainService } from "./services/main.service";
import { JailSystemService } from "./services/jail-system.service";
import { BolosService } from "./services/bolos.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { ActiveBolosComponent } from "./components/active-bolos/active-bolos.component";
import { InputBolosComponent } from "./components/input-bolos/input-bolos.component";
import { WarrantComponent } from "./components/warrant/warrant.component";
import { JailComponent } from "./components/jail/jail.component";
import { JailInfoComponent } from "./components/jail/jail-info/jail-info.component";
import { JailInputComponent } from "./components/jail/jail-input/jail-input.component";
import { CadSideNavComponent } from './components/cad-side-nav/cad-side-nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ActiveBolosComponent,
    InputBolosComponent,
    WarrantComponent,
    JailComponent,
    JailInfoComponent,
    JailInputComponent,
    CadSideNavComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatRippleModule
  ],
  providers: [
    MainService,
    BolosService,
    JailSystemService,
    { provide: APP_BASE_HREF, useValue: "/" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
