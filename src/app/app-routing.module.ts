import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SalonesComponent } from './salones/salones.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'salones', component: SalonesComponent },
    {path: '**', component: SalonesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
