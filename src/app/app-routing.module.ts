import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home/en', pathMatch: 'full' },
  { path: 'home/:lang', loadChildren: './home/home.module#HomePageModule' },
  { path: 'invitation/:lang', loadChildren: './invitation/invitation.module#InvitationPageModule' },
  { path: 'directions/:lang', loadChildren: './directions/directions.module#DirectionsPageModule' },
  { path: 'contacts/:lang', loadChildren: './contacts/contacts.module#ContactsPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
