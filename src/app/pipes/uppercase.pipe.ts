import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class Capitalize implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (!value) return;
    return value.toUpperCase();
  }
}
