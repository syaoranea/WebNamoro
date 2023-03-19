import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuResponsivelComponent } from './components/menu-responsivel/menu-responsivel.component';
import { ContadorComponent } from './components/contador/contador.component';

@NgModule({
  declarations: [
    MenuResponsivelComponent,
    ContadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuResponsivelComponent,
    ContadorComponent
  ]
})
export class SharedModule { }
