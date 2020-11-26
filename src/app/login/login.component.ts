import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {

  }
  login( form: NgForm ) {

    var myHeaders = new Headers();
            // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"User":"A01336767"});

    console.log(raw);
    var alumno = [];
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    // make API call with parameters and use promises to get response
     fetch("https://l64x96k0ta.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
    .then(response => response.json());




    }


}
