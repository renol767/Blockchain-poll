import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  // Create Mock data
  polls = [
  {
    question: 'Do You Need Blockchain System Now?',
    image: 'https://images.bisnis-cdn.com/posts/2019/06/03/930240/blockchain.jpg',
    votes: [0, 5, 7],
    voted: true,
  },
  {
    question: 'We Need Buy the ETH now?',
    image: 'https://lintasdaerah.com/wp-content/uploads/2018/09/investasi-ethereum-lebih-potensial-dibandingkan-bitcoin.jpg',
    votes: [0, 3, 6, 1],
    voted: false,
  }
  ];
}
