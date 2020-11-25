import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClassroomService{

  constructor(private httpClient: HttpClient) { }

  getClassRoomsService(){
    return this.httpClient.get("https://8ds00jpjph.execute-api.us-west-2.amazonaws.com/dev");
  }
}
