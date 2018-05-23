import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fecha' })
export class FechaPipe implements PipeTransform {

    transform(value: Date, ...args: any[]): string {
        const d = value.getDate();
        const m = value.getMonth() + 1;
        const y = value.getFullYear();
        return `${d}/${m}/${y}`;
    }
}
