import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorSearchComponent } from './donor-search.component';

describe('DonorSearchComponent', () => {
  let component: DonorSearchComponent;
  let fixture: ComponentFixture<DonorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
