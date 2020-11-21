import { Component, OnInit, Input } from '@angular/core';
import {raffleMember} from '../raffleMember';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: raffleMember;
  constructor() { }

  ngOnInit(): void {
  }

}
