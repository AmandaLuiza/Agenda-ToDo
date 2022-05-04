import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionartarefaComponent } from './adicionartarefa.component';

describe('AdicionartarefaComponent', () => {
  let component: AdicionartarefaComponent;
  let fixture: ComponentFixture<AdicionartarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionartarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionartarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
