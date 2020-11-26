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
    console.log("Hizo login" );
    console.log( document.getElementById('User').value );
    console.log( document.getElementById('Password').value );
    var firstName = document.getElementById('User').value ;
    var pass = document.getElementById('Password').value ;

    var myHeaders = new Headers();
            // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"User":firstName, "Password" : pass});


    console.log(raw);
    var alumno = [];
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log(requestOptions);
    // make API call with parameters and use promises to get response
     fetch("https://l64x96k0ta.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));

  


    }


}
