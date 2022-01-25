import { Injectable } from '@angular/core';
import { Statistique } from 'src/models/types';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  public tabSta!: Statistique[]
  stats!: Statistique[];

  constructor(private http: HttpClient) {

  }

  recupStat() {
    lastValueFrom(this.http.get<Statistique[]>("https://stats.naminilamy.fr/")).then(
      res => this.stats = res);

  }
}
