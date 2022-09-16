import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListkategoriComponent } from './listkategori.component';

describe('ListkategoriComponent', () => {
  let component: ListkategoriComponent;
  let fixture: ComponentFixture<ListkategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListkategoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListkategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
