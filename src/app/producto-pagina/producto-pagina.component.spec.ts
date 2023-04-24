import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPaginaComponent } from './producto-pagina.component';

describe('ProductoPaginaComponent', () => {
  let component: ProductoPaginaComponent;
  let fixture: ComponentFixture<ProductoPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
