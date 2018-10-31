import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {

  public data;
  search_term: string;
  curDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  output: string;
  index: string;
  cDate: Date;

  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;

  constructor(private dataService: DataService) {
    // this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
  }
  ngOnInit() {}

  getPrice() {
    this.dataService.getShareData(this.search_term).subscribe((data) => {
      if (data['Time Series (Daily)'][this.curDate] === undefined) {
        this.cDate = new Date();
        this.cDate.setDate(this.cDate.getDate() - 2);
        this.curDate = formatDate(this.cDate, 'yyyy-MM-dd', 'en');
        // console.log(this.curDate);
        this.data = data['Time Series (Daily)'][this.curDate];
        console.log(this.data);
      } else {
        this.data = data['Time Series (Daily)'][this.curDate];
      }
      // this.open = data[]
      this.open = this.data['1. open'];
      this.high = this.data['2. high'];
      this.low = this.data['3. low'];
      this.close = this.data['4. close'];
      this.volume = this.data['5. volume'];
    });
  }
}
