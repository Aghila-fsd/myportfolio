import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [  
  {
    path:'Home',
    component:LandingpageComponent
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'Samples',
    component:SamplesComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
