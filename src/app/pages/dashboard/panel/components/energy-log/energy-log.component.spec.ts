import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyLogComponent } from './energy-log.component';

describe('EnergyLogComponent', () => {
  let component: EnergyLogComponent;
  let fixture: ComponentFixture<EnergyLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
