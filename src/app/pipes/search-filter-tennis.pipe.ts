import { Pipe, PipeTransform } from '@angular/core';
import { ITennis } from '../interfaces/itennis';
import { IF1 } from '../interfaces/if1';

@Pipe({
  name: 'searchFilterTennis',
  pure: false
})
export class SearchFilterTennisPipe implements PipeTransform {
  private counter = 0;

  transform(tennisData: ITennis[], searchValueTennis:string) {
    this.counter++;
    console.log("Filter pipe executed count:", this.counter);
      if (!tennisData || !searchValueTennis) {
        return tennisData;
      }
      return tennisData.filter(tennis => 
        tennis.looser.toLowerCase().includes(searchValueTennis.toLowerCase()) ||
        tennis.numberOfSets.toString().toLowerCase().includes(searchValueTennis.toLowerCase()) ||
        tennis.publicationDate.toLowerCase().includes(searchValueTennis.toLowerCase()) ||
        tennis.tournament.toLowerCase().includes(searchValueTennis.toLowerCase()) ||
        tennis.winner.toLowerCase().includes(searchValueTennis.toLowerCase())
      );
  }
}
