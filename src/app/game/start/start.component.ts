import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  queryInput = null;
  defInput = null;

  flashCards = [];

  constructor() { }

  ngOnInit(): void {
  }
  addFlashCard() {
    const queri = this.queryInput;
    const defi = this.defInput;

    this.queryInput = null;
    this.defInput = null;
    
    const flashCard =  {'Query': queri,'Definition': defi}
    this.flashCards.push(flashCard)

    console.log(this.flashCards);
  }
}
