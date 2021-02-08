import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratConfComponent } from './contrat-conf.component';

describe('ContratConfComponent', () => {
  let component: ContratConfComponent;
  let fixture: ComponentFixture<ContratConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
