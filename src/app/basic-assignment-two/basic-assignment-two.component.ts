import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-assignment-two',
  templateUrl: './basic-assignment-two.component.html',
  styleUrls: ['./basic-assignment-two.component.css']
})
export class BasicAssignmentTwoComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
  }

  resetUsername(){
    this.username = '';
  }

}
