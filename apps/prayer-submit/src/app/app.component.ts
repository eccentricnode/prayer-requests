import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'prayers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prayer-submit';
  links = [
    { path: '/prayers', icon: Subject, title: 'Prayers' }
  ];
}
