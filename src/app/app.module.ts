import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAndRedesSocialesComponent } from './components/logo-and-redes-sociales/logo-and-redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAndRedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
