import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaaplicacaoComponent } from './novaaplicacao.component';

describe('NovaaplicacaoComponent', () => {
  let component: NovaaplicacaoComponent;
  let fixture: ComponentFixture<NovaaplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovaaplicacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaaplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
