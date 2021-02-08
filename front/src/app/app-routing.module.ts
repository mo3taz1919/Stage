import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddUserComponent } from './component/User/add-user/add-user.component';
import { ListUserComponent } from './component/User/list-user/list-user.component';
import { ContratStageComponent } from './contrat-stage/contrat-stage.component';



const routes: Routes = [
{path:'Home',component:HomeComponent},
  { path: 'Add', component: ListUserComponent },
  { path: 'contrat', component: ContratStageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
