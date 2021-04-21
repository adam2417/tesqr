import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
//import { DbsvcService } from '../../service/dbsvc.service';
import { QrisapiService } from '../../service/qrisapi.service';

@Component({
  selector: 'app-nmidgen',
  templateUrl: './nmidgen.page.html',
  styleUrls: ['./nmidgen.page.scss'],
})
export class NmidgenPage implements OnInit {
  public _nmid:any;
  public frmgennmid : FormGroup;
  private allData: any;

  private nmid: any;
  private nama: any;
  private nama_pemilik: any;
  private alamat: any;
  private kota: any;
  private kode_pos: any;
  private telpon: any;
  private kriteria: any;
  private tipe: any;
  private kd_cab: any;
  private npwp: any;
  private info: any;

  Data: any[] = []

  constructor(
    /* private db: DbsvcService, */
    private fb : FormBuilder,
    private loadingCtrl: LoadingController,
    private api: QrisapiService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.frmgennmid = this.fb.group(
      {
        tnmid: ['']
      }
    );

    /* this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchMerchant().subscribe(item => {
          this.Data = item
        })
      }
    }); */
  }

  async storeNMID() {
    let loading = await this.loadingCtrl.create({
      "message" : "Tunggu Sebentar...",
      'backdropDismiss' : true,
      'spinner':'bubbles'
    });
    await loading.present();

    this.api.getMerchantInfo(this._nmid).subscribe(result => {
      loading.dismiss();      
      this.allData = JSON.parse(JSON.stringify(result));
      console.log(this.allData);
      if(this.allData['status'] == '00') {
        this.nmid = this.allData['nmid'];
        this.nama = this.allData['nama'];
        this.nama_pemilik = this.allData['nama_pemilik'];
        this.alamat = this.allData['alamat'];
        this.kota = this.allData['kota'];
        this.kode_pos = this.allData['kode_pos'];
        this.telpon = this.allData['telpon'];
        this.kriteria = this.allData['kriteria'];
        this.tipe = this.allData['tipe'];
        this.kd_cab = this.allData['kd_cab'];
        this.npwp = this.allData['npwp'];

        let d = {
          '_nmid': this._nmid,
          'nmid' : this.nmid,
          'nama' : this.nama,
          'nama_pemilik' : this.nama_pemilik,
          'alamat' : this.alamat,
          'kota' : this.kota,
          'kode_pos' : this.kode_pos,
          'telpon' : this.telpon,
          'kriteria' : this.kriteria,
          'tipe' : this.tipe,
          'kd_cab' : this.kd_cab,
          'npwp' : this.npwp
        }
        this.api.setNavData(d);
        //this.storeData();
        this.router.navigate(['genqris'])
      } else {
        this.info = this.allData['keterangan'];
        this.showAlert('Pesan Kesalahan',this.info);
      }            
    });
  }

  /* storeData() {
    this.db.addMerchants(
        this.nmid,this.nama,this.nama_pemilik,this.alamat,this.kota,this.kode_pos,this.telpon,this.kriteria,this.tipe,this.kd_cab,this.npwp
    )
  } */

  async showAlert(head,messages) {
    const alert = await this.alertController.create({
      header: head,
      message: messages,
      buttons: ['OK']
    });

    await alert.present();
  }
}
