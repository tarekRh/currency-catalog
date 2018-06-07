import {Component, OnInit} from '@angular/core';
import {CurrencyModel} from '../../shared/models/currency.model';
import {CurrencyService} from '../../shared/services/currency.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent implements OnInit {

  currency: CurrencyModel;

  constructor(private currencyService: CurrencyService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      const currencyId = params['id'];
      if (currencyId) {
        this.currencyService.getCurrencyBiId(currencyId).subscribe(currency => {
          this.currency = currency;
        });
      }
    });

  }

}
