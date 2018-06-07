export class AttributesModel {
  code: string;
  name: string;
  currency_type: string;
  code_iso_numeric3: string;
  code_iso_alpha3: string;
  symbol: string;
  native_symbol: string;
  category: string;
  decimal_e: number

  constructor(attributes: any) {
    this.code = attributes.code;
    this.name = attributes.name;
    this.currency_type = attributes.currency_type;
    this.code_iso_numeric3 = attributes.code_iso_numeric3;
    this.code_iso_alpha3 = attributes.code_iso_alpha3;
    this.symbol = attributes.symbol;
    this.native_symbol = attributes.native_symbol;
    this.category = attributes.category;
    this.decimal_e = attributes.decimal_e;
  }
}
