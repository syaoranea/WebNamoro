import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuResponsivelComponent } from './components/menu-responsivel/menu-responsivel.component';

@NgModule({
  declarations: [
    MenuResponsivelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuResponsivelComponent
  ]
})
export class SharedModule { }
