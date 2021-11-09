import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'cart', component: CartComponent},
      {path: 'detail/:id', component: DetailsComponent},
    ]
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
