import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'morning-scoreboard',
  templateUrl: './morning-scoreboard.component.html',
  styleUrls: ['./morning-scoreboard.component.css']
})

export class MorningScoreboardComponent implements OnInit {

  private cards: any[] = [];
  private _score: number | string;
  private _transitionStyle = 'all 1.2s ease-in-out';

  @Input()
  set second(second: number) {
    if (typeof second === 'number') {
      this._transitionStyle = `all ${second}s ease-in-out`;
    }
  }

  @Input()
  set score(score: number | string) {
    score.toString().split('').map((val, index) => {
      const card = this.cards[index];
      if (card) {
        if (card.isFront) {
          if (card.front !== val) {
            card.back = val;
            card.isFront = false;
          }
        } else {
          if (card.back !== val) {
            card.front = val;
            card.isFront = true;
          }
        }
      } else {
        this.cards[index] = {
          isFront: true,
          front: val,
          back: val
        };
      }
    });
    this._score = score;
  }
  get score() {
    return this._score;
  }


  constructor() { }

  ngOnInit() {
  }

}
