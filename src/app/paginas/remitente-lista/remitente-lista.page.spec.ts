import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemitenteListaPage } from './remitente-lista.page';

describe('RemitenteListaPage', () => {
  let component: RemitenteListaPage;
  let fixture: ComponentFixture<RemitenteListaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RemitenteListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
