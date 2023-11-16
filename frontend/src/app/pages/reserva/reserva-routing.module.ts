import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { ReservarComponent } from './reservar/reservar.component';

const routes: Routes = [{
  path: '', component: IndexComponent, children: [
    { path: '', component: ListComponent },
    { path: 'reservar/:idVeiculo', component: ReservarComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
