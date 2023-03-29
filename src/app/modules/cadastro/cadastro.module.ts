import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './views/cadastro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
