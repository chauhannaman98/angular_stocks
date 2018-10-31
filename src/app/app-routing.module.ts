import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCardsComponent } from './components/home-cards/home-cards.component';
import { SharesComponent } from './components/shares/shares.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { SharesChartComponent } from './components/shares-chart/shares-chart.component';

const routes: Routes = [
  { path:  '',
    component: HomeCardsComponent
  },
  {
    path: 'shares',
    component: SharesComponent
  },
  {
    path: 'chart',
    component: SharesChartComponent
  },
  {
    path: 'crypto',
    component: CryptoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
