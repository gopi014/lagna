import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private lang: String = 'en';
  startDate: Date;
  endDate: Date;
  constructor(private events: Events, private calendar: Calendar, private toast: Toast) {

  }
langChange() {
  if (this.lang === 'en') {
    this.lang = 'ta';
  } else {
    this.lang = 'en';
  }
  this.events.publish('lang:change', this.lang);
}

createEvent() {
  this.startDate = new Date(2019, 1, 10, 18, 30, 0, 0);
  this.endDate = new Date(2019, 1, 10, 22, 30, 0, 0);
  const calOptions = this.calendar.getCalendarOptions();
  calOptions.firstReminderMinutes = 2880;
  calOptions.secondReminderMinutes = 600;
  this.calendar.findEvent('sasi weds Priya' , 'Ambattur ', 'wedding Reception', this.startDate, this.endDate)
  .then(
    (msg) => {
      if ( msg.length === 0 ) {
    this.calendar.createEventWithOptions( 'sasi weds Priya' , 'Ambattur ', 'wedding Reception', this.startDate, this.endDate, calOptions)
  .then(
    (success) => {
      this.toast.show('Calendar Event added successfully!', '10000', 'bottom').subscribe(
        toast => {
            console.log(toast);
        }
    );
     },
    (err) => { this.toast.show(err, '10000', 'bottom').subscribe(
      toast => {
          console.log(toast);
      }
  );
}
  );
      } else {
      this.toast.show('Calendar Event already exist!', '10000', 'bottom').subscribe(
        toast => {
            console.log(toast);
        });
      }
    },
    (err) => {
      this.toast.show(err, '10000', 'bottom').subscribe(
        toast => {
            console.log(toast);
        }
    );
    }
  );
}
}
