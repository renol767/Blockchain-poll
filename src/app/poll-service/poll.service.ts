import { Injectable } from '@angular/core';
import { Web3Service } from '../blockchain/web3.service';
import { Poll, PollForm } from '../types';
import { fromAscii } from 'web3-utils';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private web3: Web3Service) { }

  async getPolls(): Promise<Poll[]> {
    const polls: Poll[] = [];

    const totalPolls = await this.web3.call('getTotalPolls');
    const acc = await this.web3.getAccount();
    const voter = await this.web3.call('getVoter', acc);

    for (let i = 0; i < totalPolls; i++) {
      const poll = await this.web3.call('getPoll', i);
    }

    return polls;
  }
  executeTransaction
  vote(pollId: number, votenumber: number) {
    this.web3.executeTransaction('vote', pollId, votenumber);
  }

  createPoll(poll: PollForm) {
    this.web3.executeTransaction('createPoll',
      poll.question,
      poll.thumbnail || '',
      poll.options.map((opt) => fromAscii(opt)));
   }
}
