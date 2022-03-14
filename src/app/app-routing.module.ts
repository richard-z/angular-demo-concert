import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CreateConcertComponent } from './create-concert/create-concert.component';


const routes : Routes = [
  {
    path: 'overview', component:OverviewComponent
  },
  {
    path: 'createConcert', component:CreateConcertComponent
  },
  {
    path: 'newsletter', component:NewsletterComponent
  },
  {
    path:'edit/:id', component:CreateConcertComponent
  },
  {
    path:'', redirectTo:'overview', pathMatch:'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
