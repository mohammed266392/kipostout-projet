import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeQueVousProposeeComponent } from './ce-que-vous-proposee.component';

describe('CeQueVousProposeeComponent', () => {
  let component: CeQueVousProposeeComponent;
  let fixture: ComponentFixture<CeQueVousProposeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeQueVousProposeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeQueVousProposeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
