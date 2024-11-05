import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramMaterialComponent } from './program-material.component';

describe('ProgramMaterialComponent', () => {
  let component: ProgramMaterialComponent;
  let fixture: ComponentFixture<ProgramMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
