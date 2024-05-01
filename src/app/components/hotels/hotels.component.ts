import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
    hotelstab:any=[
      {Hid:11,Hname:"hotel1",Hcity:"Munich, Germany",description:"the hotel boasts a blend of traditional Bavarian charm and modern elegance, with spacious rooms overlooking the city's historic landmarks and a cozy on-site beer garden offering a taste of local culture. " , path:'assets/img/hotel1.jpg', price: 100 },
      {Hid:22,Hname:"hotel2",Hcity:"Barcelona, Spain" ,description:"the hotel stands out with its vibrant Mediterranean-inspired decor, rooftop terrace providing panoramic views of the city and Gaudí's architectural wonders, and a culinary experience featuring authentic Catalan cuisine.", path:'assets/img/hotel2.jpg', price: 200},
      {Hid:33,Hname:"hotel3",Hcity:"New York City, USA", description:"the hotel exudes urban sophistication, offering luxurious accommodations, a sleek rooftop bar with breathtaking skyline views, and convenient proximity to iconic attractions like Times Square and Central Park." , path:'assets/img/hotel3.jpg' , price: 300}, ];
  
    constructor(private router:Router) { }
  
    ngOnInit() {
    }
  goToRooms(Hid:number){
    this.router.navigate(["hotelRoom/"+Hid]);
  }
  }
  
