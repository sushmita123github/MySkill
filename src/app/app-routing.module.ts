import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [  
  {path:'', component:HomeComponent},
  {path:'members', component:MemberListComponent},
  {path:'members/add',component:AddMemberComponent},
  {path:'members/:id',component:MemberDetailsComponent},
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
