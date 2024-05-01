import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css']
})
export class HotelRoomsComponent implements OnInit {
  Room:any=[];
  Hid:any;
  roomtab:any=[
    {Rid:1,Hid:11 ,Hname:"hotel1",description:"Experience refined elegance in our Junior Suite, where a spacious living area complements the stylish bedroom, creating a sophisticated retreat for relaxation." , path:'assets/img/room1.jpg', name: "junior suite", price: "100£/night" ,capacite:2 },
    {Rid:2,Hid:11,Hname:"hotel1",description:"Elevate your stay in the Executive Suite, a luxurious haven featuring a separate living space, premium amenities, and personalized service for a truly indulgent experience." , path:'assets/img/room2.jpg', name: "Executive Suite", price: "200 £/night",capacite:3},
    {Rid:3,Hid:22,Hname:"hotel2", description:"Unwind in comfort and style in our Super Deluxe Room, offering extra space, stunning views, and upgraded amenities, providing a perfect blend of luxury and convenience." , path:'assets/img/room3.jpg' , name:"Super Deluxe", price: "300£/night",capacite:5}, ]
  
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.Hid = this.activatedRoute.snapshot.paramMap.get("Hid");
    for(let i=0; i< this.roomtab.length;i++)
    { if (this.roomtab[i].Hid== this.Hid) 
      {this.Room.push(this.roomtab[i]);
      }
    }
  }

}
