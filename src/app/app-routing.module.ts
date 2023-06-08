import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccountComponent } from './pages/account/account.component';
import { DetailsComponent } from './pages/details/details.component';
import { IdentificationComponent } from './pages/identification/identification.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'account', component:AccountComponent, canActivate:[AuthGuard]},
  {path:'identification', component:IdentificationComponent},
  {path:'details/:id', component:DetailsComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
