import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Prayer } from '../../shared/prayer';

@Component({
  selector: 'prayers-prayer-request-list',
  templateUrl: './prayer-request-list.component.html',
  styleUrls: ['./prayer-request-list.component.scss']
})
export class PrayerRequestListComponent{
  @Input() prayers: Prayer[];
  @Output() selected = new EventEmitter();
  
  constructor() {}

  selectPrayer(prayer: Prayer) {
    this.selected.emit(prayer);
  }
}
