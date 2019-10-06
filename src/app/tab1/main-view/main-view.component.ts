import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {

  constructor(
    private shareData: ShareDataService
  ) { }

  serviceInformation: Object = this.shareData.myObj;

  ngOnInit() {
    console.log("shareData",this.shareData);
  }

  printData() {

  }


}
