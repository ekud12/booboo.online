import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
        this.picSrc = `../assets/pics/${Math.floor(
          Math.random() * 31 + 1
        )}.jpg`;
      },
      () => {},
      () => setTimeout(() => (this.loaded = true), 300)
    );
  }
}
