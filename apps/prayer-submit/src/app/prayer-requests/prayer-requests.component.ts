import { Component, OnInit } from '@angular/core';
import { Prayer } from '../shared/prayer';
import { PrayersService } from '@prayers/new-core-data';

@Component({
  selector: 'prayers-prayer-requests',
  templateUrl: './prayer-requests.component.html',
  styleUrls: ['./prayer-requests.component.scss']
})
export class PrayerRequestsComponent implements OnInit {
  prayers$;
  selectedPrayer: Prayer;

  constructor(private prayersService: PrayersService) { }

  ngOnInit() {
    this.getPrayers();
    this.resetPrayer();
  }

  selectPrayer(prayer: Prayer) {
    this.selectedPrayer = prayer;
  }

  resetPrayer() {
    const emptyPrayer: Prayer = {
      id: null,
      name: '',
      prayerType: '',
      message: '',
      spoken: true
    }
    this.selectPrayer(emptyPrayer);
  }

  getPrayers(){
    this.prayers$ = this.prayersService.all();
  }

  savePrayer(prayer) {
    if(!prayer.id) {
      this.createPrayer(prayer);
    } else {
      this.updatePrayer(prayer);
    }
  }

  createPrayer(prayer) {
    this.prayersService.create(prayer)
      .subscribe(result => {
        this.getPrayers();
        this.resetPrayer();
      });
  }

  updatePrayer(prayer) {
    this.prayersService.update(prayer)
      .subscribe(result => {
        this.getPrayers();
        this.resetPrayer();
      });
  }

  deletePrayer(prayer) {
    this.prayersService.delete(prayer.id)
      .subscribe(result => this.getPrayers());
  }

  cancel() {
    this.resetPrayer();
  }
}