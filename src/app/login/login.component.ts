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
  

    }


}
