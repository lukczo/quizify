import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
   yourCards = [];

  constructor() { }

  ngOnInit(): void {
    console.log('History state:', history.state)
    this.yourCards = history.state
  }

}
