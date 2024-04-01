import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemitenteFormularioPage } from './remitente-formulario.page';

describe('RemitenteFormularioPage', () => {
  let component: RemitenteFormularioPage;
  let fixture: ComponentFixture<RemitenteFormularioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RemitenteFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
