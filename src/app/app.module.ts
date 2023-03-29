import { APP_BASE_HREF } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    LandingPageModule, 
    AppRoutingModule,
    SharedModule,
    CadastroModule,
    ReactiveFormsModule

  ],
   providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
