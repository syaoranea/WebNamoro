import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showMenu = false;
  menu: string[] = [ "home", "registrar", "contato"]
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth >= 990){
      this.showMenu = false
    }
    console.log(`Largura da janela: ${event.target.innerWidth}`);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  menuResponsivo(){
    this.showMenu = this.showMenu ? false : true;
  }

}
