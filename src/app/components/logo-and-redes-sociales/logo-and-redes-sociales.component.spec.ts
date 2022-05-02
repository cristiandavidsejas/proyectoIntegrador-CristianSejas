import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAndRedesSocialesComponent } from './logo-and-redes-sociales.component';

describe('LogoAndRedesSocialesComponent', () => {
  let component: LogoAndRedesSocialesComponent;
  let fixture: ComponentFixture<LogoAndRedesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAndRedesSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAndRedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
