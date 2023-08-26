import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { EmailComponent } from './email/email.component';
import { PageNosRealisationComponent } from './page-nos-realisation/page-nos-realisation.component';

const routes: Routes = [

  {path: '', redirectTo: 'Accueil', pathMatch:"full"},
  {path: 'Accueil', component : AccueilComponent},
  {path: 'Contact', component : EmailComponent},
  {path: 'Nos-realisations', component : PageNosRealisationComponent},
  {path: '**', component : MaintenanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
