import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   teamtab:any=[
    {path:1,name:"name1",designation:"Guest Services Manager"},
    {path:2,name:"name2",designation:"Housekeeping Supervisor"},
    {path:3,name:"name3",designation:"Front Desk Receptionist"},
    {path:4,name:"name4",designation:"Events Coordinator"},

]
  constructor() { }

  ngOnInit() {
  }

}
