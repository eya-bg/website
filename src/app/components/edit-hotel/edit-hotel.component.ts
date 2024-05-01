import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {
  Hid:any;
  Hotel:any={};
  HotelsTab:any =[
    {Hid:11,Hname:"hotel1",Hcity:"Tunis",description:"Experience refined elegance " , path:'assets/img/hotel1.jpg',roomsnbre:2 },
    {Hid:22,Hname:"hotel2",Hcity:"Sfax",description:"Experience refined elegance " , path:'assets/img/hotel2.jpg',roomsnbre:1 },
    {Hid:33,Hname:"hotel3",Hcity:"Monastir",description:"Experience refined elegance " , path:'assets/img/hotel3.jpg',roomsnbre:0 },

  ]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Hid=this.activatedRoute.snapshot.paramMap.get("Hid");
    for(let i=0;i< this.HotelsTab.length;i++){
      if(this.HotelsTab[i].Hid==this.Hid){
        this.Hotel=this.HotelsTab[i];
        break;
      }
    }
  }
  EditHotel(){console.log("Here my data", this.Hotel)}

}
