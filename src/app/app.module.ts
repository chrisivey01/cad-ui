import { APP_BASE_HREF } from "@angular/common";

import { RouterModule } from "@angular/router";
import { JailSystemService } from "./services/jail-system.service";
import { CadSystemService } from "./services/cad-system.service";
import { BolosService } from "./services/bolos.service";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from "angular-datatables";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { ActiveBolosComponent } from "./active-bolos/active-bolos.component";
import { InputBolosComponent } from "./input-bolos/input-bolos.component";
import { WarrantComponent } from "./warrant/warrant.component";
import { JailComponent } from "./jail/jail.component";
import { JailInfoComponent } from "./jail/jail-info/jail-info.component";
import { JailInputComponent } from "./jail/jail-input/jail-input.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ActiveBolosComponent,
    InputBolosComponent,
    WarrantComponent,
    JailComponent,
    JailInfoComponent,
    JailInputComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    CadSystemService,
    BolosService,
    JailSystemService,
    { provide: APP_BASE_HREF, useValue: "/" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
