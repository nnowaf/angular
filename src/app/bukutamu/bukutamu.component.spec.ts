import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukutamuComponent } from './bukutamu.component';

describe('BukutamuComponent', () => {
  let component: BukutamuComponent;
  let fixture: ComponentFixture<BukutamuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BukutamuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BukutamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
