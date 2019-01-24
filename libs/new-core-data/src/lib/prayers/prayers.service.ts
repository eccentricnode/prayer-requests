import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://austinsprayersapi.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class PrayersService {
  model = 'prayers';

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(prayer) {
    return this.httpClient.post(this.getUrl(), prayer);
  }
  
  update(prayer) {
    return this.httpClient.patch(this.getUrlForId(prayer.id), prayer);
  }

  delete(prayerId) {
    return this.httpClient.delete(this.getUrlForId(prayerId));
  }
}