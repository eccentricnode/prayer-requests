import { Component, OnInit, Input } from '@angular/core';
import { Prayer } from '../../shared/prayer';

@Component({
  selector: 'prayers-prayer-request-details',
  templateUrl: './prayer-request-details.component.html',
  styleUrls: ['./prayer-request-details.component.scss']
})
export class PrayerRequestDetailsComponent{
  @Input() selectedPrayer: Prayer;
}
