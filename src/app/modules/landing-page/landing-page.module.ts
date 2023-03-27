import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { SharedModule } from '../../shared/shared.module';
import { landingPageRoutingModule } from './landing-page-routing.module';




@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    landingPageRoutingModule
  ]
})
export class LandingPageModule { }
