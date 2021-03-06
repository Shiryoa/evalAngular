import { Component } from '@angular/core';
import { Statistique } from 'src/models/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eval';
  sta1: Statistique = new Statistique("15dsrf5ezf4e", "Demographie en Espagne", "47M")
  sta2: Statistique = new Statistique("5ez5d4fe8e5f", "Demographie en Italie", "60M")

  tabSta = [this.sta1, this.sta2]

  supprimerStat(statASuppr: Statistique) {
    let pos = this.tabSta.indexOf(statASuppr)
    if (pos != -1) {
      this.tabSta.splice(pos, 1)
    }
  }

}
