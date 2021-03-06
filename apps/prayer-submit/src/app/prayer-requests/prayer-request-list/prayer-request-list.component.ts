import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Prayer } from '../../shared/prayer';

@Component({
  selector: 'prayers-prayer-request-list',
  templateUrl: './prayer-request-list.component.html',
  styleUrls: ['./prayer-request-list.component.scss']
})
export class PrayerRequestListComponent{
  @Input() prayers: Prayer[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectPrayer(prayer: Prayer) {
    this.selected.emit(prayer);
  }

  displayMessage(message) {
    return message ? message : '';
  }
}
