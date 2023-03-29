import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuResponsivelComponent } from './components/menu-responsivel/menu-responsivel.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ProgressStepDirective } from './components/progress/progress-step.directive';
import { ProgressStepComponent } from './components/progress/progress-step/progress-step.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    MenuResponsivelComponent,
    ContadorComponent,
    ProgressComponent,
    ProgressStepComponent,
    ProgressStepDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuResponsivelComponent,
    ContadorComponent,
    ProgressComponent,
    ProgressStepComponent,
    ProgressStepDirective,
  ]
})
export class SharedModule { }
