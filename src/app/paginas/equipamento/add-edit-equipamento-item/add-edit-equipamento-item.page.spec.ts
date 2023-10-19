import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditEquipamentoItemPage } from './add-edit-equipamento-item.page';

describe('AddEditEquipamentoItemPage', () => {
  let component: AddEditEquipamentoItemPage;
  let fixture: ComponentFixture<AddEditEquipamentoItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditEquipamentoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
