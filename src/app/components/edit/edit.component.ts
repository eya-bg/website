import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Rid:any;
  RoomForm:FormGroup;
  Room:any={};
  roomsTab:any =[
    {Rid:1,Hname:"hotel1",description:"Experience refined elegance in our Junior Suite, where a spacious living area complements the stylish bedroom, creating a sophisticated retreat for relaxation." , path:'assets/img/room1.jpg', name: "junior suite", price: "100£/night"  },
    {Rid:2,Hname:"hotel1",description:"Elevate your stay in the Executive Suite, a luxurious haven featuring a separate living space, premium amenities, and personalized service for a truly indulgent experience." , path:'assets/img/room2.jpg', name: "Executive Suite", price: "200 £/night"},
    {Rid:3,Hname:"hotel2", description:"Unwind in comfort and style in our Super Deluxe Room, offering extra space, stunning views, and upgraded amenities, providing a perfect blend of luxury and convenience." , path:'assets/img/room3.jpg' , name:"Super Deluxe", price: "300£/night"}
   ];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Rid=this.activatedRoute.snapshot.paramMap.get("Rid");
    for(let i=0;i< this.roomsTab.length;i++){
      if(this.roomsTab[i].Rid==this.Rid){
        this.Room=this.roomsTab[i];
        break;
      }
    }
  }
  EditRoom(){console.log("Here my data", this.Room )}
}
