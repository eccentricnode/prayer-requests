import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Prayer } from '../../shared/prayer';

@Component({
  selector: 'prayers-prayer-request-details',
  templateUrl: './prayer-request-details.component.html',
  styleUrls: ['./prayer-request-details.component.scss']
})
export class PrayerRequestDetailsComponent{
  currentPrayer: Prayer;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  savePrayerSubmit(prayer: Prayer) {
    this.saved.emit(prayer);
  }

  cancelPrayerSubmit() {
    this.cancelled.emit();
  }
  
  @Input() set selectedPrayer(value: Prayer) {
    this.currentPrayer = Object.assign({}, value);
  }
}
