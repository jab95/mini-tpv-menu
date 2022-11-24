import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandaComponent } from './comanda/comanda.component';
import { MesasComponent } from './mesas/mesas.component';

const routes: Routes = [
  {path:"", redirectTo:'/mesas',pathMatch:"full"},
  {path:"mesas",component:MesasComponent},
  {path:"menu/:mesa",component:ComandaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
