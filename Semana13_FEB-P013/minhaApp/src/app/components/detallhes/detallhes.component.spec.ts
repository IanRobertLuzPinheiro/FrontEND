import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesComponent } from './detallhes.component';

describe('DetallhesComponent', () => {
  let component: DetalhesComponent;
  let fixture: ComponentFixture<DetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
