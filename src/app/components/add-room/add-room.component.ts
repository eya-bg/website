import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  RoomForm: FormGroup;
  Room: any={};

  constructor() { }

  ngOnInit() {
  }
  addRoom(){
    console.log("Here room object", this.Room);
};

}
