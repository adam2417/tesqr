import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
//import { DbsvcService } from '../../service/dbsvc.service';
import { QrisapiService } from '../../service/qrisapi.service';

@Component({
  selector: 'app-genqris',
  templateUrl: './genqris.page.html',
  styleUrls: ['./genqris.page.scss']
})
export class GenqrisPage implements OnInit {

  public frmgenqris : FormGroup;
  public _nid : any;
  public _nom : any;
  public _nostruk : any;
  public _tips: any;

  private allData: any;
  private cData: any;

  val =  null;

  encodedData: any;

  constructor(
    /* private db: DbsvcService, */
    private fb : FormBuilder, 
    private router:Router, 
    private api:QrisapiService, 
    private loadingCtrl: LoadingController,
    private nav: NavController
  ) {
    
   }

  ngOnInit() {
    this.frmgenqris = this.fb.group(
      {
        tnmid: [''],
        tnominal: [''],
        tno_struk: [''],
        ttips:['']
      }
    );

    /* this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchMerchant().subscribe(item => {
          console.log(item);
          this._nid = item['nmid']
        })
      }
    }); */

    this.cData = this.api.getNavData();
    this._nid = this.cData['_nmid'];
  }

  async qrisGen() {
    let loading = await this.loadingCtrl.create({
      "message" : "Please Wait While Generated QRIS...",
      'backdropDismiss' : true,
      'spinner':'bubbles'
    });
    await loading.present();

    this.api.getQrisGen(this._nid,this._nom,this._nostruk).subscribe(result => {
      loading.dismiss();
      //console.log(JSON.parse(JSON.stringify(result)));
      this.allData = JSON.parse(JSON.stringify(result));
      if(this.allData['status'] == '00') {
        this.val = this.allData['hasil'];
        //this.nav.navigateForward('generatedqr/${this.val}',{state:this.val});
        let d = {
          'nama_merchant' : this.allData['nama_qris'],
          'nostruk' : this.allData['no_struk'],
          'nmid' : this.allData['nmid'],
          'nominal' : this.allData['nominal'],
          'res' : this.val
        }
        this.api.setNavData(d);
        this.router.navigate(['generatedqr'])
      }            
    });

    //console.log(this.allData);

    /* if(this.allData['status'] == '00') {
      this.createdCode = this.allData['hasil'];
    } */
  }
}
