import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProgressComponent } from 'src/app/shared/components/progress/progress.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
   this.formulario = this.formBuilder.group({
    nome: [null],
    dataNascimento: [null],
    email: [null],
    senha: [null]
   })
  }
   goNext(progress: ProgressComponent) {
    progress.next();
  }

  onStateChange(event) {
    console.log(event);
  }

  
}
