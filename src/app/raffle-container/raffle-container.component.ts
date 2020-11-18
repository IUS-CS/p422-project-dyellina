import {Component, Input, OnInit} from '@angular/core';
import { Entry } from '../raffleMember';
import { ENTRIES } from '../raffleMembers';
import {AppModule} from '../app.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-raffle-container',
  styleUrls: ['./raffle-container.component.scss'],
  templateUrl: './raffle-container.component.html'
})

export class RaffleContainerComponent implements OnInit {
  constructor() { }
  @Input() entry: Entry;
  // selectedEntry: Entry;
  entries = ENTRIES;
  clicked = false;
  counter = 0;
  submitted = false;
  entryInfo: Entry;
 ngOnInit(): void  {
    this.entry = new Entry();
    this.entryInfo = new Entry();
   }
   onSubmit(): void {
     // this.add();
   }
  add(): void {
   this.clicked = true;
   this.counter++;
  }
  reset(): void{
   this.clicked = false;
  }
  submit(): void {
   this.submitted = true;

  }
  }
