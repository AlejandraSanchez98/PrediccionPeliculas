import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInformacionComponent } from './agregar-informacion.component';

describe('AgregarInformacionComponent', () => {
  let component: AgregarInformacionComponent;
  let fixture: ComponentFixture<AgregarInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
