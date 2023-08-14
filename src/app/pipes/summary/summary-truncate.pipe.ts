import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryTruncate',
})
export class SummaryTruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (maxLength >= value.length) {
      return value + '<br><br>'; // sorry about that :)
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }
}
