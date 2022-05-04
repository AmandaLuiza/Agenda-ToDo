/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LertarefaComponent } from './lertarefa.component';

describe('LertarefaComponent', () => {
  let component: LertarefaComponent;
  let fixture: ComponentFixture<LertarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LertarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LertarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
