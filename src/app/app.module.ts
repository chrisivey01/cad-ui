import { APP_BASE_HREF } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MainService } from "./services/main.service";
import { JailService } from "./services/jail.service";
import { BolosService } from "./services/bolos.service";
import { FinesService } from './services/fines.service';
import { TopOfficerService } from './services/top-officers.service';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { JailComponent } from "./components/jail/jail.component";
import { CadSideNavComponent } from './components/cad-side-nav/cad-side-nav.component';
import { FinesComponent } from './components/fines/fines.component';
import { TopOfficersComponent } from './components/top-officers/top-officers.component';

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
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator"; 
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"; 
import { MatSortModule } from "@angular/material/sort";
import { PlateSearcherComponent } from './components/plate-searcher/plate-searcher.component';
import { BolosComponent } from './components/bolos/bolos.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JailComponent,
    CadSideNavComponent,
    FinesComponent,
    PlateSearcherComponent,
    BolosComponent,
    TopOfficersComponent
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
    MatRippleModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule, 
    MatProgressSpinnerModule,
    MatSortModule,
  ],
  providers: [
    MainService,
    BolosService,
    JailService,
    FinesService,
    BolosService,
    TopOfficerService,
    { provide: APP_BASE_HREF, useValue: "/" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
