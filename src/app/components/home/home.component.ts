import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  let username = JSON.parse(localStorage.getItem('currentUser'));
  console.log("currentUser", username);	
  }
  Userdata = function ()
  {
  	console.log("hitting");

  }
  

}
