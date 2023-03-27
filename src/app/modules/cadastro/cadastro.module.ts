import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './views/cadastro.component';



@NgModule({
  declarations: [
    FormularioComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
