import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';
import {CurrencyModel} from '../models/currency.model';


@Injectable()
export class CurrencyService {


  constructor(private http: HttpClient) {
  }

  /**
   * lod currencies lis by search, filter and pagination
   * @param {number} page page number
   * @param {number} size page size
   * @param {string} searchKey search keyword
   * @param {string} filterOption filter selected
   * @returns {Observable<any>} list of currencies
   */
  getCurrenciesByPageAndSize(pageNumber: number, pageSize: number, searchKey: string, filterOption): Observable<any> {
    let urlWs = 'https://api.openfintech.io/v1/currencies?page%5Bnumber%5D=' + pageNumber + '&page%5Bsize%5D=' + pageSize;
    if (searchKey && !filterOption) {
      urlWs = urlWs + '&filter%5Bsearch%5D=' + searchKey;
    }
    if (searchKey && filterOption) {
      urlWs = urlWs + 'filter%5B' + filterOption + '3%5D=' + searchKey;
    }
    return this.http.get(urlWs).pipe(
      map((response: any) => {
        return response;
      }, (error: any) => {
        console.log(error);
      }));
  }

  /**
   * find currency by id
   * @param id id of currency
   * @returns {Observable<any>} the currency
   */
  getCurrencyBiId(id): Observable<any> {
    return this.http.get(`https://api.openfintech.io/v1/currencies/` + id).pipe(
      map((response: any) => {
        return new CurrencyModel(response.data);
      }, (error: any) => {
        console.log(error);
      }));
  }


}
