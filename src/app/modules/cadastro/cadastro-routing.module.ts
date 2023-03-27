import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { STATES } from './cadastro.states';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: STATES })
  ]
})
export class CadastroRoutingModule { }
