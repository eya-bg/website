import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => 
      item.Hname.toLowerCase().includes(searchText) || 
      item.Hcity.toLowerCase().includes(searchText)
    );
  }
}
