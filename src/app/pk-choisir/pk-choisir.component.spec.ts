import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkChoisirComponent } from './pk-choisir.component';

describe('PkChoisirComponent', () => {
  let component: PkChoisirComponent;
  let fixture: ComponentFixture<PkChoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkChoisirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkChoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
