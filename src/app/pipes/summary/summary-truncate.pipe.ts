import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryTruncate',
})
export class SummaryTruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
      return value;
    }

    return value.slice(0, maxLength) + '...';
  }
}
