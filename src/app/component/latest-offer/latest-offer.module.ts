import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestOfferComponent } from './latest-offer.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { CommunitySectionComponent } from './community-section/community-section.component';
import { PromotionalSectionComponent } from './promotional-section/promotional-section.component';
import { SitemapSectionComponent } from './sitemap-section/sitemap-section.component';



@NgModule({
  declarations: [
    LatestOfferComponent,
    BannerSectionComponent,
    ServiceSectionComponent,
    CommunitySectionComponent,
    PromotionalSectionComponent,
    SitemapSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LatestOfferModule { }
