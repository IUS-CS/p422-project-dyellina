import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export class Entry {
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  player5: string;
}
@Injectable({
  providedIn: 'root'
})
export class raffleMember {
  constructor(
    private http: HttpClient
  ) {}

  private url = 'v1/raffles';
  public getnm(name: string): Observable<Entry>  {
    return this.http.get<Entry>(name);
  }
}
