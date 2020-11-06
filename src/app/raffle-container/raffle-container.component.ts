import { Component, OnInit } from '@angular/core';
import { Entry } from '../raffleMember';
import { ENTRIES } from '../raffleMembers';

@Component({
  selector: 'app-raffle-container',
  templateUrl: './raffle-container.component.html',
  styleUrls: ['./raffle-container.component.scss']
})
export class RaffleContainerComponent implements OnInit {
  selectedEntry: Entry;
  entries = ENTRIES;
  // tslint:disable-next-line:typedef
  onSelect(entry: Entry ) {
    this.selectedEntry = entry;
  }
  constructor() { }

  ngOnInit()  {
  }

}
