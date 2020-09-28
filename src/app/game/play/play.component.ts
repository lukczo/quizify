import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
   yourCards = history.state.data;
   currentQuery = this.drawQuestion();   
   correctAnswer = null;
   wrongAnswers = 'Wrong';
 
   constructor( ) {}

  ngOnInit(): void {
    console.log('History state:', history.state.data);
  }

  drawQuestion() {
    let drawnQ
    drawnQ = this.yourCards[Math.floor(Math.random() * this.yourCards.length)];
    console.log('drawQuestion:', drawnQ)
    return drawnQ
  }

}
