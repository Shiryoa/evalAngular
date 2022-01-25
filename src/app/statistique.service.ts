import { Injectable } from '@angular/core';
import { Statistique } from 'src/models/types';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  public tabSta!: Statistique[]
  constructor() { }
}
