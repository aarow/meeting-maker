import { Component, OnInit } from '@angular/core';
import { MeetingService } from "../meeting/meeting.service";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [
    '../../../../node_modules/fullcalendar/dist/fullcalendar.css',
    './calendar.component.scss']
})
export class PACCalendarComponent implements OnInit {
  calendarOptions: Object = {
        //height: 'parent',
        //fixedWeekCount : false,
        //defaultDate: '2017-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events,
        //weekends: false,
        //events: null
      };

  constructor(private _meetingService: MeetingService) { }

  ngOnInit() {
  }

}
