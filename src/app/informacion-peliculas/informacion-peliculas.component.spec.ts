import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPeliculasComponent } from './informacion-peliculas.component';

describe('InformacionPeliculasComponent', () => {
  let component: InformacionPeliculasComponent;
  let fixture: ComponentFixture<InformacionPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
