import { Component, OnInit } from '@angular/core';
import { Prayer } from '../shared/prayer';

@Component({
  selector: 'prayers-prayer-requests',
  templateUrl: './prayer-requests.component.html',
  styleUrls: ['./prayer-requests.component.scss']
})
export class PrayerRequestsComponent implements OnInit {
  selectedPrayer: Prayer;
  prayers: Prayer[] = [
    {
        "id": 1,
        "name": "Alex Smith",
        "prayerType": "testimony",
        "message": "A testimony message",
        "spoken": true
    },
    {
        "id": 2,
        "name": "Alexa Smith",
        "prayerType": "prayer",
        "message": "A prayer message",
        "spoken": true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  selectPrayer(prayer: Prayer) {
    this.selectedPrayer = prayer;
  }

}
