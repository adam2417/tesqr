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

  constructor(private route: Router,private api:QrisapiService) { }

  ngOnInit() {
    this.allData = this.api.getNavData();
    console.log(this.allData);
    this.val = this.allData.res;
  }

}
