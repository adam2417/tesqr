import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class QrisapiService {

  navData:any;
  constructor(public http: HttpClient) { }
  
  getQrisGen(nmid,nominal,nostruk) {
    return this.http.get('http://bankntt.co.id/qrcode/gen/indexj.php?nominal='+ nominal +'&nmid='+ nmid +'&no_struk='+ nostruk +'&submit=submit');
  }

  getMerchantInfo(nmid) {
    return this.http.get('http://bankntt.co.id/qrcode/gen/indexm.php?nmid='+ nmid +'&submit=submit');
  }

  setNavData(navObj) {
    this.navData = navObj;
  }

  getNavData() {
    if(isNullOrUndefined(this.navData)) 
      return 0;
    return this.navData;
  }
}
