import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from 'src/models/types';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() stats!: Statistique;

  constructor() { }

  ngOnInit(): void {
  }

}
