import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-menu-responsivel',
  templateUrl: './menu-responsivel.component.html',
  styleUrls: ['./menu-responsivel.component.scss']
})
export class MenuResponsivelComponent implements OnInit {

  @Input() menuList: string[];
  constructor(
    private  stateService: StateService
  ) { }

  ngOnInit(): void {
  }

  goToRegistrar(){
    console.log('click');
    
    this.stateService.go("cadastro", {}, {location: false})
  }
}
