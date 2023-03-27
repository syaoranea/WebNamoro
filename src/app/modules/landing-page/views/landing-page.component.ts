import { Component, HostListener, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  dataFim: Date = new Date('2023-06-18T19:00:00');
  

  showMenu = false;
  menu: string[] = [ "home", "registrar", "contato"]
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth >= 990){
      this.showMenu = false
    }
    console.log(`Largura da janela: ${event.target.innerWidth}`);
  }
  
  constructor(
  private  stateService: StateService
  ) { }

  ngOnInit(): void {
    
  }

  menuResponsivo(){
    this.showMenu = this.showMenu ? false : true;
  }

  goToRegistrar(){
    this.stateService.go("cadastro", {}, {location: false})
  }

}
