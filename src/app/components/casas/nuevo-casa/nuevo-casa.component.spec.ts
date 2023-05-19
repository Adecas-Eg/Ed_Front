import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCasaComponent } from './nuevo-casa.component';

describe('NuevoCasaComponent', () => {
  let component: NuevoCasaComponent;
  let fixture: ComponentFixture<NuevoCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
