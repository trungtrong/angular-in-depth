import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculate',
    pure: false
})
export class CalculatePipe implements PipeTransform {

    transform(input: number): number {
        return input + 1;
    }
}
