import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'create', component: CreateUpdateComponent, pathMatch:'full' },
      { path: 'create/:id', component: CreateUpdateComponent, pathMatch:'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroRoutingModule { }
