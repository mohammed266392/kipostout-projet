import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrireTonProjetComponent } from './decrire-ton-projet.component';

describe('DecrireTonProjetComponent', () => {
  let component: DecrireTonProjetComponent;
  let fixture: ComponentFixture<DecrireTonProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecrireTonProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecrireTonProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
