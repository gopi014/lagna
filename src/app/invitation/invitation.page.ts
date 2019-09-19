import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.page.html',
  styleUrls: ['./invitation.page.scss'],
})
export class InvitationPage implements OnInit {
 private lang:any;
 private test:boolean=true;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    console.log(this.lang);
  }

 

}
