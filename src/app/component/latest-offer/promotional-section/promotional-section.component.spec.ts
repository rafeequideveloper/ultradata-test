import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalSectionComponent } from './promotional-section.component';

describe('PromotionalSectionComponent', () => {
  let component: PromotionalSectionComponent;
  let fixture: ComponentFixture<PromotionalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
