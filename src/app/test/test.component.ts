import { ClassroomService } from '../classroom.service';
import { Component, OnInit} from '@angular/core';

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
}
