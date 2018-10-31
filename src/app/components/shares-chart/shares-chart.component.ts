import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shares-chart',
  templateUrl: './shares-chart.component.html',
  styleUrls: ['./shares-chart.component.css']
})
export class SharesChartComponent implements OnInit {

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'INFY'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


  constructor() { }

  ngOnInit() {}

}

