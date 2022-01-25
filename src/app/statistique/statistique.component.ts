import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from 'src/models/types';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() stats!: Statistique;
  @Output() demandeSuppression: EventEmitter<any>;

  constructor() {
    this.demandeSuppression = new EventEmitter();
  }

  ngOnInit(): void {
  }

  actionClic() {
    this.demandeSuppression.emit();
  }
}
