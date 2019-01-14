import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestListComponent } from './prayer-request-list.component';

describe('PrayerRequestListComponent', () => {
  let component: PrayerRequestListComponent;
  let fixture: ComponentFixture<PrayerRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
