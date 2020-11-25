import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClassroomService } from './classroom.service';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ClassroomFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClassroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
