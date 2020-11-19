import {Component, Input, OnInit} from '@angular/core';
import { Entry } from '../raffleMember';
import { ENTRIES } from '../raffleMembers';
import {AppModule} from '../app.module';
import { angularMath } from 'angular-ts-math';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-raffle-container',
  styleUrls: ['./raffle-container.component.scss'],
  templateUrl: './raffle-container.component.html'
})

export class RaffleContainerComponent implements OnInit {
  constructor() { }
  min = 1;
  max = 5;
  nm1 = 0;
  nm2 = 0;
  nm3 = 0;
  nm4 = 0;
  nm5 = 0;
  wins = [this.nm1, this.nm2, this.nm3, this.nm4, this.nm5 ];
  num = angularMath.getIntegerRandomRange(this.min, this.max);
  @Input() name1: string;
  @Input() name2: string;
  @Input() name3: string;
  @Input() name4: string;
  @Input() name5: string;
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
     this.name1 = '';
     this.name2 = '';
     this.name3 = '';
     this.name4 = '';
     this.name5 = '';
   }
   this.resetbtn = false;
  }
  }
