import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'muitaletra'
})
export class MuitaletraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
