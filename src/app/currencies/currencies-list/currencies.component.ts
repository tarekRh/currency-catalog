import {CurrencyService} from '../../shared/services/currency.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {PageStateModel} from '../../shared/models/pageState.model';
import {MatPaginator} from '@angular/material';


@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  currencies: any[] = [];
  columnsNumber: number;
  pageState: PageStateModel;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filterOptions: string[] = ['id', 'code', 'name', 'type'];
  searchKey: string;
  currentSelectOption: string;


  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    //set column number
    this.columnsNumber = this.getColumnNumber();
    // initialisation
    this.loadCurrencies(0, 10, this.searchKey, this.currentSelectOption);
  }

  /**
   * find column number
   * if desctop --> 6
   * else if tablet --> 4
   * else (mobile) --> 2
   * @returns {number}
   */
  getColumnNumber() {
    if (window.innerWidth < 427) {
      return 2;
    } else if (window.innerWidth < 768) {
      return 4;
    } else {
      return 6;
    }
  }

  /**
   * refrech list currency after pagination change
   * @param e pagination infos
   */
  public handlePage(e: any) {
    this.loadCurrencies(e.pageIndex, e.pageSize, this.searchKey, this.currentSelectOption);
  }

  /**
   * lod currencies lis by search, filter and pagination
   * @param {number} page page number
   * @param {number} size page size
   * @param {string} searchKey search keyword
   * @param {string} filterOption filter selected
   */
  loadCurrencies(page: number, size: number, searchKey: string, filterOption: string) {
    this.currencyService.getCurrenciesByPageAndSize(page, size, searchKey, filterOption).subscribe(result => {
      this.setPaginationOption(result.meta.total, result.meta.pages)
      this.currencies = result.data;
    });
  }

  /**
   * search by keyword
   */
  searchList() {
    this.loadCurrencies(0, 10, this.searchKey, this.currentSelectOption);
  }

  private setPaginationOption(itemsNumber, pageNumber) {
    this.pageState = new PageStateModel();
    this.pageState.totalItems = itemsNumber;
    this.pageState.numberOfPages = pageNumber;
  }

}
