import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestsComponent } from './prayer-requests.component';

describe('PrayerRequestsComponent', () => {
  let component: PrayerRequestsComponent;
  let fixture: ComponentFixture<PrayerRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
