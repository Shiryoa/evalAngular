import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { CreerComponent } from './creer/creer.component';
import { AffichageComponent } from './affichage/affichage.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    CreerComponent,
    AffichageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
