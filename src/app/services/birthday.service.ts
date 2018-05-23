import { Injectable } from '@angular/core';

@Injectable()
export class BirthdayService {

    loadWeek(): User[] {
        return [
            { name: 'Julian', day: 1 },
            { name: 'Pepito', day: 4 },
            { name: 'Alejandra', day: 0 }
        ];
    }

}

export class User {
    constructor(public name: string, public day: number) { }
}
