import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modaleMobileMenu : boolean = false;
  showContainer: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // this.breakpointObserver
    //   .observe(['(min-width: 982px)'])
    //   .subscribe((state: BreakpointState) => {
    //     const btn1  : HTMLDivElement = document.querySelector('.header_menu') as HTMLDivElement ;
    //     if (state.matches) {
    //       this.showContainer = true;
          
    //   //btn1.classList.toggle('width30');
    //       btn1.style.width = "auto";
      
    //     } else {
    //       this.showContainer = false;
    //       btn1.style.width = "0%";
    //     }
    //   });
  }

  nosRealisation(event : Event){
    console.log("j'ai cliqué sur nos réalisation",event);
    event.stopPropagation();
    // const divRealisation = event.composedPath();
    // console.log("event ",divRealisation[1]);
    const divMenuWidth : HTMLDivElement = document.querySelector('.header_menu') as HTMLDivElement;
    const divContentRealisations : HTMLDivElement = document.querySelector('.header_menu_items_realisation_content') as HTMLDivElement;
    const divMenuItems : NodeListOf<HTMLDivElement> = document.querySelectorAll('.header_menu_items') as NodeListOf<HTMLDivElement>;

    divMenuItems.forEach(element => {
      element.classList.toggle('realisation-active');
    });
    divMenuWidth.classList.toggle('realisation-active');
    if(divMenuWidth.classList.contains('realisation-active')){
      divContentRealisations.classList.add("active");
    }else{
      divContentRealisations.classList.remove("active");
    }
    
  

    
  }

  afficheMenu(){
    console.log("j'affiche le menu");
    const divImageMenuBurger  : HTMLDivElement = document.querySelector('.header_menu-burger') as HTMLDivElement ;
    const divModaleMenuMobile  : HTMLDivElement = document.querySelector('.header_menu') as HTMLDivElement ;
    const divActivated  : NodeListOf<HTMLDivElement> = document.querySelectorAll('.active,.realisation-active') as NodeListOf<HTMLDivElement> ;
    //const btnRealisation  : HTMLDivElement = document.querySelector('.header_menu_items_realisation_content') as HTMLDivElement ;
    //const divContent : HTMLDivElement = document.querySelector('.header_menu_items_realisation_content') as HTMLDivElement;
    //const divMenuItems : NodeListOf<HTMLDivElement> = document.querySelectorAll('.header_menu_items') as NodeListOf<HTMLDivElement>;
    //const divClassActive : NodeListOf<HTMLDivElement> = document.querySelectorAll('.active') as NodeListOf<HTMLDivElement>;



    divImageMenuBurger.classList.toggle('active');
    divModaleMenuMobile.classList.toggle('active');
    if(!divImageMenuBurger.classList.contains('active')){
      
      divActivated.forEach(element => {
        element.classList.remove('realisation-active');
        element.classList.remove('active');
      });
    }
      //btnRealisation.classList.remove('active');
      //divMenu.classList.remove('realisation-active');
    //   divMenuItems.forEach(element => {
    //     element.classList.remove('realisation-active');
    //   });
    // }
    //   divMenu.classList.remove('close');
    // }else{
    //   btn1.classList.add('close');
    // }
    // const btn1  : HTMLDivElement = document.querySelector('.header_menu') as HTMLDivElement ;
    // if(!this.modaleMobileMenu){
    //   //btn1.classList.toggle('width30');
    //   btn1.style.width = "30%";
      
    // }else{
    //   //btn1.classList.toggle('width0');
    //   btn1.style.width = "0%";
    // }
    // this.modaleMobileMenu = !this.modaleMobileMenu;
  }

  afficheMenuMobile(){
    console.log("j'affiche le menu en mobile");
  }

}
