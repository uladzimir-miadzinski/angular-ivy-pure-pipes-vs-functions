import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false,
})
export class ImpurePipe implements PipeTransform {
  transform(value: number): number {
    console.log('Run the ImpurePipe');
    return value * value;
  }
}
