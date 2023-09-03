import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LatestOfferComponent } from './component/latest-offer/latest-offer.component';

const routes: Routes = [
  { path: 'latest-posts', component: LatestOfferComponent },
  { path: '',   redirectTo: '/latest-posts', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
