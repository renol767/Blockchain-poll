import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators' ;
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of(
      [
        {
          id: 1,
          question: 'Do You Need Blockchain System Now?',
          thumbnail: 'https://images.bisnis-cdn.com/posts/2019/06/03/930240/blockchain.jpg',
          results: [0, 5, 7],
          options: ["Yes", "No", "Most Votes"],
          voted: true,
        },
        {
          id: 2,
          question: 'We Need Buy the ETH now?',
          thumbnail: 'https://lintasdaerah.com/wp-content/uploads/2018/09/investasi-ethereum-lebih-potensial-dibandingkan-bitcoin.jpg',
          results: [0, 3, 6, 1],
          options: ["Yes", "No", "Most Votes"],
          voted: false,
        }
      ]
    ).pipe(delay(2000));
  }

  vote(pollId: number, votenumber: number) {
    console.log(pollId, votenumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
   }
}
