import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClassroomService } from './classroom.service';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SalonesComponent } from './salones/salones.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ClassroomFormComponent,
    LoginComponent,
    SalonesComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
    {path: 'salones', component: SalonesComponent},
    {path: 'login' , component: LoginComponent},
    {path: '**', component: SalonesComponent},

  ]),
    AppRoutingModule,
  ],
  providers: [ClassroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
