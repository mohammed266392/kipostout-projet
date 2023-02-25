import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  buttonRealisation: Subject<boolean> = new BehaviorSubject<boolean>(false);
  buttonAcceuil: Subject<boolean> = new BehaviorSubject<boolean>(false);
  buttonNosProduits: Subject<boolean> = new BehaviorSubject<boolean>(false);
  buttonMenuMobile: Subject<boolean> = new BehaviorSubject<boolean>(false);
  buttonMenuMobileToggle :boolean= false;
  buttonNosRealisationsToggle = false;
  constructor() { }

  clickNosRealisation(){
    this.buttonRealisation.next(!this.buttonNosRealisationsToggle);
    this.buttonAcceuil.next(false);
    this.buttonNosProduits.next(false);
    this.buttonNosRealisationsToggle = !this.buttonNosRealisationsToggle;
  }

  clickReset(){
    this.buttonRealisation.next(false);
    this.buttonAcceuil.next(false);
    this.buttonNosProduits.next(false);
    this.buttonMenuMobile.next(false);
    this.buttonMenuMobileToggle = false;
    this.buttonNosRealisationsToggle = false;
  }
  clickMenuMobile(){
    this.buttonMenuMobile.next(!this.buttonMenuMobileToggle);
    this.buttonRealisation.next(false);
    this.buttonAcceuil.next(false);
    this.buttonNosProduits.next(false);
    this.buttonMenuMobileToggle = !this.buttonMenuMobileToggle
  }
}
