import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClassroomService{

  constructor(private httpClient: HttpClient) { }

  getClassRoomsService(){
    return this.httpClient.get("https://8ds00jpjph.execute-api.us-west-2.amazonaws.com/dev");
  }

  addClassroomService(data: any){
    var id = data['ID'] ;
    var horarioInicio = data['horarioInicio'];
    var horarioFin = data['horarioFin'];
    var correo = data['correo'];
    var motivo = data['motivo'];
    
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"ID":id, "HorarioInicio" : horarioInicio, 'HorarioFin': horarioFin, 'Correo': correo, 'Motivo':motivo});
    
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    };
    console.log(requestOptions);
    // make API call with parameters and use promises to get response
    fetch("https://8ds00jpjph.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
    .then(response => response.json())
    .then(data => console.log(data)); 
  }
}
