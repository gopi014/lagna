import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  private lang:any;
  private destination:string="Prem Mahal Marriage Hall,Salem Bypass Road, Karur, Tamil Nadu 639006";
  start:string;
   constructor(private activatedRoute: ActivatedRoute,private launchNavigator: LaunchNavigator) { }

  ngOnInit() {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
  }


}
