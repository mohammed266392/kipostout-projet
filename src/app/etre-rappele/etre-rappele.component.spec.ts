import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtreRappeleComponent } from './etre-rappele.component';

describe('EtreRappeleComponent', () => {
  let component: EtreRappeleComponent;
  let fixture: ComponentFixture<EtreRappeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtreRappeleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtreRappeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
