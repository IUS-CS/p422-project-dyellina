// FINAL
import {Component, OnInit} from '@angular/core';
import {Entry} from '../raffleMember';
import { angularMath } from 'angular-ts-math';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-raffle-container',
  styleUrls: ['./raffle-container.component.scss'],
  templateUrl: './raffle-container.component.html'
})
export class RaffleContainerComponent implements OnInit {
  constructor(
     private route: ActivatedRoute
  ) { }
  min = 0;
  max = 4;
  ENTRIES: Entry = {player1 : 'Sexton', player2: 'Doyle', player3: 'Hitttta', player4: 'Finkbine', player5: 'Song'};
  wins = [0, 0, 0, 0, 0];
  num = angularMath.getIntegerRandomRange(this.min, this.max);
  clicked = false;
  resetbtn = false;
 ngOnInit(): void  {
   }
   onSubmit(): void {
     this.num = angularMath.getIntegerRandomRange(this.min, this.max);
     this.clicked = true;
     this.wins[this.num]++;
   }
  reset(): void{
   this.clicked = false;
   this.resetbtn = true;
   if (this.resetbtn)
   {
     this.wins[0] = 0;
     this.wins[1] = 0;
     this.wins[2] = 0;
     this.wins[3] = 0;
     this.wins[4] = 0;
   }
   this.resetbtn = false;
  }
  }
