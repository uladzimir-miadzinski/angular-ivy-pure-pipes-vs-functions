import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
})
export class PurePipe implements PipeTransform {
  transform(value: number): number {
    console.log('Run the PurePipe');
    return value * value;
  }
}
