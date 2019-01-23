import { async, TestBed } from '@angular/core/testing';
import { NewCoreDataModule } from './new-core-data.module';

describe('NewCoreDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewCoreDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewCoreDataModule).toBeDefined();
  });
});
