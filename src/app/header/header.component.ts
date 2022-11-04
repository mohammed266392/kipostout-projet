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
    const divRealisation = event.composedPath();
    console.log("event ",divRealisation[1]);
    const divContent : HTMLDivElement = document.querySelector('.header_menu_items_realisation_content') as HTMLDivElement;
    if(divContent.style.display == "flex"){
      divContent.style.display = "none";
    }else{
      divContent.style.display = "flex";
    }
    
  }

  afficheMenu(){
    console.log("j'affiche le menu");
    const btn  : HTMLDivElement = document.querySelector('.header_menu-burger') as HTMLDivElement ;
    const btn1  : HTMLDivElement = document.querySelector('.header_menu') as HTMLDivElement ;
    btn.classList.toggle('active');
    btn1.classList.toggle('active');
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
