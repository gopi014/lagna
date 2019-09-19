import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements OnInit {
  private lang:any;
  private destination:string="Prem Mahal Marriage Hall,Salem Bypass Road, Karur, Tamil Nadu 639006";
  start:string;
   constructor(private activatedRoute: ActivatedRoute,private launchNavigator: LaunchNavigator) { }

  ngOnInit() {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    console.log(this.lang);
  }
  navigate(){
    let options: LaunchNavigatorOptions = {
        start: this.start
    };

    this.launchNavigator.navigate(this.destination, options)
        .then(
            success => console.log('Launched navigator'),
            error => console.log('Error launching navigator: ' + error)
        );
}

}
