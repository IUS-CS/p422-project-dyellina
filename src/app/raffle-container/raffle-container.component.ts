import { Component, OnInit } from '@angular/core';
import { Entry } from '../raffleMember';
import { ENTRIES } from '../raffleMembers';

@Component({
  selector: 'app-raffle-container',
  templateUrl: './raffle-container.component.html',
  styleUrls: ['./raffle-container.component.scss']
})

export class RaffleContainerComponent implements OnInit {
  constructor() { }
  selectedEntry: Entry;
  entries = ENTRIES;
  model: '';
  ngOnInit(): void  {
  }
  onSelect(entry: Entry ): void {
    this.selectedEntry = entry;
  }
  }
