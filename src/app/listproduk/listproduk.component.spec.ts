import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprodukComponent } from './listproduk.component';

describe('ListprodukComponent', () => {
  let component: ListprodukComponent;
  let fixture: ComponentFixture<ListprodukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprodukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListprodukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
