import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuotesService } from './quotes.service';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [style({ transform: 'translateY(20%)', opacity: 0 }), animate(500)]),
      transition(':leave', [style({ transform: 'translateY(20%)', opacity: 0 }), animate(500)])
    ]),
    trigger('itemAnim2', [
      transition(':enter', [style({ transform: 'translateY(20%)', opacity: 0 }), animate(1000)]),
      transition(':leave', [style({ transform: 'translateY(20%)', opacity: 0 }), animate(1000)])
    ]),
    trigger('itemAnim3', [
      transition(':enter', [style({ transform: 'translateY(100%)', opacity: 0 }), animate(1500)]),
      transition(':leave', [style({ transform: 'translateY(100%)', opacity: 0 }), animate(1500)])
    ]),
    trigger('itemAnim4', [
      transition(':enter', [style({ transform: 'translateY(10%)', opacity: 0 }), animate(2000)]),
      transition(':leave', [style({ transform: 'translateY(10%)', opacity: 0 }), animate(2000)])
    ])
  ]
})
export class AppComponent implements OnInit {
  loaded = false;
  quote: string;
  author: string;
  picSrc: string;
  constructor(private quoteService: QuotesService) {
    this.quote = (Math.random() * 10001).toString();
    this.author = (Math.random() * 10001).toString();
  }

  ngOnInit() {
    this.quoteService.getRandomQuote().subscribe(
      val => {
        this.quote = val['contents'].quote;
        this.author = val['contents'].author;
        this.picSrc = `../assets/pics/${Math.floor(Math.random() * 31 + 1)}.jpg`;
      },
      () => {},
      () => (this.loaded = true)
    );
  }
}
