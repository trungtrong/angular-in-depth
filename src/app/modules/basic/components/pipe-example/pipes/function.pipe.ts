import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'function',
})
export class FunctionPipe implements PipeTransform {
    transform(value: any, handler: (value: any) => any, context?: any): number {
        return context ? handler.call(context, value) : handler(value);
    }
}
