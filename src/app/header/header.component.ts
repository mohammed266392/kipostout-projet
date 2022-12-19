import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modaleMobileMenu : boolean = false;
  showContainer: boolean = false;
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
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  nosRealisation(event : Event){
    console.log("j'ai cliqué sur nos réalisation",event);
    const divMenuWidth : HTMLDivElement = document.querySelector('.header_menu') as HTMLDivElement;
    const divContentRealisations : HTMLDivElement = document.querySelector('.header_menu_items_realisation_content') as HTMLDivElement;
    const divMenuItems : NodeListOf<HTMLDivElement> = document.querySelectorAll('.header_menu_items') as NodeListOf<HTMLDivElement>;
    const divLinkRealisation : HTMLDivElement = event.composedPath()[0] as HTMLDivElement;;


    divMenuItems.forEach(element => {
      element.classList.toggle('realisation-active');
    });
    divMenuWidth.classList.toggle('realisation-active');
    if(divMenuWidth.classList.contains('realisation-active')){
      divContentRealisations.classList.add("active");
      divLinkRealisation.classList.add("active");

    }else{
      divContentRealisations.classList.remove("active");
      divLinkRealisation.classList.remove("active");
    }
    
  }

  afficheMenu(){
    console.log("j'affiche le menu");
    const divImageMenuBurger  : HTMLDivElement = document.querySelector('.header_menu-burger') as HTMLDivElement ;
    const divModaleMenuMobile  : HTMLDivElement = document.querySelector('.header_menu') as HTMLDivElement ;
    const divActivated  : NodeListOf<HTMLDivElement> = document.querySelectorAll('.active,.realisation-active') as NodeListOf<HTMLDivElement> ;

    divImageMenuBurger.classList.toggle('active');
    divModaleMenuMobile.classList.toggle('active');
    if(!divImageMenuBurger.classList.contains('active')){
      
      divActivated.forEach(element => {
        element.classList.remove('realisation-active');
        element.classList.remove('active');
      });
    }
  }

  afficheMenuMobile(){
    console.log("j'affiche le menu en mobile");
  }
  goToTheAcceuil(){
    this.router.navigate(['Acceuil']);
  }
  goToTheDecrireProjet(){
    this.router.navigate(['Decrire-mon-projet']);
  }
  goToTheEtreRappele(){
    this.router.navigate(['Etre-rappele']);
  }
}
