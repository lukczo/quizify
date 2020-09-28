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
   answers = this.shuffleArray(this.yourCards)
 
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
  
  shuffleArray(array): Array {
    console.log('at start of func:', array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    console.log('at end of func:', array);

    let random = Math.floor(Math.random() * 5);

    array.splice(random, 1, {id: 32344332, Query: 'kurwa', Definition: 'mac'});
    return array
}
}
