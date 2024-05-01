import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  servicetab:any=[
    {class:"fa fa-hotel fa-2x text-primary",service:"Rooms & Appartment", description: "Immerse yourself in comfort and style with our thoughtfully designed rooms, offering a blend of modern amenities and a relaxing ambiance."},
    {class:"fa fa-utensils fa-2x text-primary",service:"Food & Restaurant", description:"Savor a culinary journey with our diverse menu crafted from fresh, locally-sourced ingredients, promising a delightful dining experience." },
    {class:"fa fa-spa fa-2x text-primary",service:"Spa & Fitness", description:"Rejuvenate your body and mind at our spa and fitness center, where wellness meets serenity, providing a perfect escape for relaxation and invigoration." },
    {class:"fa fa-swimmer fa-2x text-primary",service:"Sports & Gaming", description : "Embrace the spirit of play and competition with our array of sports and games facilities, ensuring endless entertainment for all ages." },
    {class:"fa fa-glass-cheers fa-2x text-primary",service:"Event & Party", description:"Elevate your celebrations and gatherings in our versatile event spaces, where impeccable service and attention to detail create unforgettable moments." },
    {class:"fa fa-dumbbell fa-2x text-primary",service:"GYM & Yoga", description: "Achieve your fitness goals in our state-of-the-art gym, or find balance with rejuvenating yoga sessions, promoting holistic well-being for all fitness enthusiasts."},
    
   ];

  constructor() { }

  ngOnInit() {
  }

}
