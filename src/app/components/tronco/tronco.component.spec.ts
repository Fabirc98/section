import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncoComponent } from './tronco.component';

describe('TroncoComponent', () => {
  let component: TroncoComponent;
  let fixture: ComponentFixture<TroncoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TroncoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TroncoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
