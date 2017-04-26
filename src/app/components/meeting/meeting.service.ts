import { Injectable } from '@angular/core';
import { Meeting } from "./meeting.model";

import { MEETINGS } from "./mock-meetings";


@Injectable()
export class MeetingService {
  meetings: Meeting[];

  constructor() { }

  getMeetings(): Meeting[] {
    return MEETINGS;
  }
}


