import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { RoomComponent } from './components/room/room.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelsComponent } from './components/hotels/hotels.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginOwnerComponent } from './components/login-owner/login-owner.component';
import { RoomsTableComponent } from './components/rooms-table/rooms-table.component';
import { HotelsTableComponent } from './components/hotels-table/hotels-table.component';
import { EditHotelComponent } from './components/edit-hotel/edit-hotel.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { SignupOwnerComponent } from './components/signup-owner/signup-owner.component';
import { HotelRoomsComponent } from './components/hotel-rooms/hotel-rooms.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './components/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    BookingComponent,
    AboutComponent,
    RoomComponent,
    ServiceComponent,
    TeamComponent,
    NewsletterComponent,
    LoginComponent,
    SignupComponent,
    HotelsComponent,
    EditComponent,
    AddRoomComponent,
    LoginOwnerComponent,
    HotelsTableComponent,
    RoomsTableComponent,
    EditHotelComponent,
    AddHotelComponent,
    SignupOwnerComponent,
    HotelRoomsComponent,
    SearchComponent,
    FilterPipe,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
