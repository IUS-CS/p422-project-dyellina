import {Component, Input, OnInit} from '@angular/core';
import {Entry, raffleMember} from '../raffleMember';
import { ENTRIES } from '../raffleMembers';
import {AppModule} from '../app.module';
import { angularMath } from 'angular-ts-math';
import { FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-raffle-container',
  styleUrls: ['./raffle-container.component.scss'],
  templateUrl: './raffle-container.component.html'
})
export class RaffleContainerComponent implements OnInit {
   // entries: Observable<Entry>;
  constructor(
     private route: ActivatedRoute
  ) { }
  min = 0;
  max = 4;
  nm1 = 0;
  nm2 = 0;
  nm3 = 0;
  nm4 = 0;
  nm5 = 0;
  ENTRIES: Entry = {player1 : 'Sexton', player2: 'Doyle', player3: 'Hitttta', player4: 'Finkbine', player5: 'ANON'};
  wins = [0, 0, 0, 0, 0];
  num = angularMath.getIntegerRandomRange(this.min, this.max);
  clicked = false;
  resetbtn = false;
 ngOnInit(): void  {
   }
   onSubmit(): void {
     this.clicked = true;
     this.wins[this.num]++;
     this.num = angularMath.getIntegerRandomRange(this.min, this.max);
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
