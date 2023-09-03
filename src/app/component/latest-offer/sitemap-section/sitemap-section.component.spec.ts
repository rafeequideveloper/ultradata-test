import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapSectionComponent } from './sitemap-section.component';

describe('SitemapSectionComponent', () => {
  let component: SitemapSectionComponent;
  let fixture: ComponentFixture<SitemapSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitemapSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
