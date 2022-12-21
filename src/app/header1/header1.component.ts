import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {
  modaleMobileMenu : boolean = false;
  showContainer: boolean = false;
  buttonRealisation: boolean = false;
  menuMobile: boolean = false;
  wasInside = false;

  @HostListener('click')
  clickInside() {
    console.log("clicked inside");
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      console.log("clicked outside");
    }
    this.wasInside = false;
    this.headerService.buttonRealisation.subscribe(value =>{
      this.buttonRealisation = value;
    });
    this.headerService.clickReset();
  }

  constructor(private router : Router, private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  nosRealisation(){
    
    this.headerService.buttonRealisation.subscribe(value =>{
      this.buttonRealisation = value;
    });
    this.headerService.clickNosRealisation();
    console.log("valeur of buttonRealisation",this.buttonRealisation);

    
  }

  afficheMenu(){
    this.headerService.buttonMenuMobile.subscribe(value =>{
      console.log("ma data : ",value);
      this.menuMobile = value;
    });
    this.headerService.clickMenuMobile();

  }

  afficheMenuMobile(){
    console.log("j'affiche le menu en mobile");
  }
  goToTheAcceuil(){
    this.router.navigate(['Accueil']);
  }
  goToTheDecrireProjet(){
    this.router.navigate(['Decrire-mon-projet']);
  }
  goToTheEtreRappele(){
    this.router.navigate(['Etre-rappele']);
  }
}
