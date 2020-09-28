import { identifierModuleUrl } from '@angular/compiler';
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

  validateAdd() {
    return !this.queryInput || !this.defInput ? true : false;
  }

  validateStart() {
    return this.flashCards.length < 4 ? true : false;
  }
  addFlashCard() {
    const queri = this.queryInput;
    const defi = this.defInput;
    const id = Math.floor(Math.random() * 1000);

    this.queryInput = null;
    this.defInput = null;
    
    const flashCard =  {'id': id, 'Query': queri,'Definition': defi}
    this.flashCards.push(flashCard)

    console.log(this.flashCards);
  }
}
