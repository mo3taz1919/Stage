import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratStageComponent } from './contrat-stage.component';

describe('ContratStageComponent', () => {
  let component: ContratStageComponent;
  let fixture: ComponentFixture<ContratStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
