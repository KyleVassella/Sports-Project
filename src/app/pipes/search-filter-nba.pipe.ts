import { Pipe, PipeTransform } from '@angular/core';
import { INba } from '../interfaces/inba';

@Pipe({
  name: 'searchFilterNba'
})
export class SearchFilterNbaPipe implements PipeTransform {

  transform(nbaData: INba[], searchValueNba: string): INba[] {
    if (!nbaData || !searchValueNba) {
      return nbaData;
    }
    return nbaData.filter(nba => 
      nba.gameNumber.toString().toLowerCase().includes(searchValueNba.toLowerCase()) ||
      nba.looser.toLowerCase().includes(searchValueNba.toLowerCase()) ||
      nba.mvp.toLowerCase().includes(searchValueNba.toLowerCase()) ||
      nba.publicationDate.toLowerCase().includes(searchValueNba.toLowerCase()) ||
      nba.tournament.toLowerCase().includes(searchValueNba.toLowerCase()) ||
      nba.winner.toLowerCase().includes(searchValueNba.toLowerCase())
    );
  }

}
