import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})

export class FlashcardComponent implements OnInit {

  @Input() card: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
