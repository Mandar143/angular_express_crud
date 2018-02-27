import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ViewClientComponent } from './client/view-client/view-client.component';

const routes: Routes = [
  {path:'', component:AddClientComponent},
  {path:'view', component:ViewClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
