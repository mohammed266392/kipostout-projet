import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosOffresEtServicesComponent } from './nos-offres-et-services.component';

describe('NosOffresEtServicesComponent', () => {
  let component: NosOffresEtServicesComponent;
  let fixture: ComponentFixture<NosOffresEtServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosOffresEtServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosOffresEtServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
