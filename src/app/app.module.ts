import { JailSystemService } from './jail-system.service';
import { CadSystemService } from './cad-system.service';
import { BolosService } from './bolos.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables'

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ActiveBolosComponent } from './active-bolos/active-bolos.component';
import { InputBolosComponent } from './input-bolos/input-bolos.component';
import { WarrantComponent } from './warrant/warrant.component';
import { JailComponent } from './jail/jail.component';
import { JailInfoComponent } from './jail/jail-info/jail-info.component';
import { JailInputComponent } from './jail/jail-input/jail-input.component';

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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [CadSystemService,
    BolosService,
    JailSystemService
    ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
