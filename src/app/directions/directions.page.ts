import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements OnInit {
  public lang:any;
  private destination:string="Prem Mahal Marriage Hall,Salem Bypass Road, Karur, Tamil Nadu 639006";
  start:string;
   constructor(private activatedRoute: ActivatedRoute,private launchNavigator: LaunchNavigator) { }

  ngOnInit() {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    console.log(this.lang);
  }
  navigate(){
    if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
     (navigator.platform.indexOf("iPad") != -1) ||
     (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");
    else /* else use Google */
    window.open("https://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");
}
navigatetohotel(){
  if /* if we're on iOS, open in Apple Maps */
  ((navigator.platform.indexOf("iPhone") != -1) ||
   (navigator.platform.indexOf("iPad") != -1) ||
   (navigator.platform.indexOf("iPod") != -1))
  window.open("maps://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");
  else /* else use Google */
  window.open("https://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");

}

}
