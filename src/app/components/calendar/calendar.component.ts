import { Component } from '@angular/core';
import { BirthdayService, User } from '../../services/birthday.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

    data: User[] = [];

    constructor(public service: BirthdayService) {
        this.data = service.loadWeek();
    }

}
