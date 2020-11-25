import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroestablecimientoComponent } from './registroestablecimiento.component';

describe('RegistroestablecimientoComponent', () => {
  let component: RegistroestablecimientoComponent;
  let fixture: ComponentFixture<RegistroestablecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroestablecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroestablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
