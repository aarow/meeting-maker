import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CalendarComponent  } from "angular2-fullcalendar/src/calendar/calendar";


import { HomePage } from "./home.component";
import { PACCalendarComponent } from '../../components/calendar/calendar.component';

const appRoutes: Routes = [
    { path: '', component: HomePage }
];

@NgModule({
  declarations: [
    CalendarComponent,
    HomePage,
    PACCalendarComponent
      ],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  providers: [],
  bootstrap: [],
  exports: []
})
export class HomePageModule { }
