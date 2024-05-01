import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginOwnerComponent } from './components/login-owner/login-owner.component';
import { HotelsTableComponent } from './components/hotels-table/hotels-table.component';
import { RoomsTableComponent } from './components/rooms-table/rooms-table.component';
import { EditHotelComponent } from './components/edit-hotel/edit-hotel.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { SignupOwnerComponent } from './components/signup-owner/signup-owner.component';
import { HotelRoomsComponent } from './components/hotel-rooms/hotel-rooms.component';
import { BookingComponent } from './components/booking/booking.component';
import { SearchComponent } from './components/search/search.component';





const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Rooms", component:RoomComponent},
  {path:"About", component:AboutComponent},
  {path:"Services", component:ServiceComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"signupOwner",component:SignupOwnerComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"editRoom/:Rid",component:EditComponent},
  {path:"owner",component:LoginOwnerComponent},
  {path:"dashboard",component:HotelsTableComponent},
  {path:"hotelRooms/:Hid",component:RoomsTableComponent},
  {path:"editHotel/:Hid",component:EditHotelComponent},
  {path:"addRoom",component:AddRoomComponent},
  {path:"addHotel",component:AddHotelComponent},
  {path:"hotelRoom/:Hid",component:HotelRoomsComponent},
  {path:"Booking",component:BookingComponent},
  {path:"search",component:SearchComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
