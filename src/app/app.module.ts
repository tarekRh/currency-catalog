import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CurrencyDetailComponent} from './currencies/currency-detail/currency-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MatGridListModule, MatPaginatorModule, MatSelectModule} from '@angular/material';
import {CurrenciesComponent} from './currencies/currencies-list/currencies.component';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyService} from './shared/services/currency.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'currencies', component: CurrenciesComponent},
  {path: 'currency/:id', component: CurrencyDetailComponent},
  {path: '', redirectTo: '/currencies', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
