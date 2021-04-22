import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QrisapiService } from '../../service/qrisapi.service';

@Component({
  selector: 'app-generatedqr',
  templateUrl: './generatedqr.page.html',
  styleUrls: ['./generatedqr.page.scss'],
})
export class GeneratedqrPage implements OnInit {

  allData:any;
  val:any;

  constructor(private route: Router,private api:QrisapiService,private router:Router) { }

  ngOnInit() {
    this.allData = this.api.getNavData();
    console.log(this.allData);
    this.val = this.allData.res;
  }

  kembali() {
    let d = {
      'nmid' : this.allData['nmid'],
      'nostruk' : this.allData['no_struk'],
      'nominal' : this.allData['nominal'],
    }
    this.api.setNavData(d);
    this.router.navigate(['genqris'])
  }
}
