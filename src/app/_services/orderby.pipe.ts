import { Pipe, PipeTransform } from '@angular/core';
import { Kit } from './kits.service';
@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
