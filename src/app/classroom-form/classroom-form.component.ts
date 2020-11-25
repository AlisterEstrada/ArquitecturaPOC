import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddClassroomForm } from '../AddClassroomForm'
@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.css']
})
export class ClassroomFormComponent implements OnInit {

  classroomInputForm: AddClassroomForm = new AddClassroomForm();

  @Output() emitClassroomData:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendClassroom(){
    this.emitClassroomData.emit(this.classroomInputForm);
  }

}
