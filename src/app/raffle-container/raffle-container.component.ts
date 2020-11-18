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
  nm1 = '';
  nm2 = '';
  nm3 = '';
  nm4 = '';
  nm5 = '';
  min = 1;
  max = 5;
  num = angularMath.getIntegerRandomRange(this.min, this.max);
  @Input() name1 = this.nm1;
  @Input() name2 = this.nm2;
  @Input() name3 = this.nm3;
  @Input() name4 = this.nm4;
  @Input() name5 = this.nm5;
  // selectedEntry: Entry;
  entries = ENTRIES;
  clicked = false;
  counter = 0;
  resetbtn = false;
  entryInfo = [this.nm1, this.nm2, this.nm3, this.nm4, this.nm5];
 ngOnInit(): void  {
   }
   onSubmit(): void {
     this.clicked = true;
   }
  add(): void {
   this.clicked = true;
   this.counter++;
  }
  reset(): void{
   this.clicked = false;
   this.resetbtn = true;
   this.num = angularMath.getIntegerRandomRange(this.min, this.max);
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
