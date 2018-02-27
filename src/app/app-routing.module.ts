import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { RegisterComponent } from './login/register/register.component';
import { DashComponent } from './dashborad/dash/dash.component';
import { RegComponent } from './reg/reg.component';
import { DocumentComponent } from './document/document.component';



const routes: Routes = [
 { path: '',component: RegisterComponent},
  { path: 'dash',component: DashComponent},
  { path: 'reg',component: RegComponent},
  {path : 'document',component:DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
