import { ClassroomService } from '../classroom.service';
import { Component, OnInit} from '@angular/core';
import { AddClassroomForm } from '../AddClassroomForm'
@Component({
  selector: 'app-classroom',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  constructor(private classroomService: ClassroomService) { }

  classRoomItems: any = [];

  ngOnInit(){
    this.querySalones();
  }

  querySalones(){
    this.classroomService.getClassRoomsService().subscribe(response => {
      if(response){
        this.classRoomItems = response;
      }
    })
  }
  sendClassroomData(event: AddClassroomForm){
    let objPetition: any = {};
    objPetition['ID'] = event.ID;
    objPetition['horarioInicio'] = event.horarioInicio;
    objPetition['horarioFin'] = event.horarioFin;
    objPetition['correo'] = event.correo;
    objPetition['motivo'] = event.motivo;

    this.classroomService.addClassroomService(objPetition);
  }
}
