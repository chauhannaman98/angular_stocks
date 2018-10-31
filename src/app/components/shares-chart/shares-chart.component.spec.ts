import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesChartComponent } from './shares-chart.component';

describe('SharesChartComponent', () => {
  let component: SharesChartComponent;
  let fixture: ComponentFixture<SharesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
