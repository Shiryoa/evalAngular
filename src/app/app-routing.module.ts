import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';
import { CreerComponent } from './creer/creer.component';

const routes: Routes = [
  { path: "affichage", component: AffichageComponent },
  { path: "creation", component: CreerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
