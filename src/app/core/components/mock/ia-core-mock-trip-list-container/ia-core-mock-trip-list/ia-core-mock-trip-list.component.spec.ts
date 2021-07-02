import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMockTripListComponent } from './ia-core-mock-trip-list.component';

describe('IaCoreMockTripListComponent', () => {
  let component: CoreMockTripListComponent;
  let fixture: ComponentFixture<CoreMockTripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreMockTripListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreMockTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
