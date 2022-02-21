import { Pipe, PipeTransform } from '@angular/core';
import { IF1 } from 'src/app/interfaces/sports';


@Pipe({
  name: 'searchFilterF1'
})
export class SearchFilterF1Pipe implements PipeTransform {

  transform(f1Data: IF1[], searchValueF1: string): IF1[] {
    if (!f1Data || !searchValueF1) {
      return f1Data;
    }
    return f1Data.filter(f1 => 
      f1.publicationDate.toLowerCase().includes(searchValueF1.toLowerCase()) ||
      f1.seconds.toString().toLowerCase().includes(searchValueF1.toLowerCase()) ||
      f1.tournament.toLowerCase().includes(searchValueF1.toLowerCase()) ||
      f1.winner.toLowerCase().includes(searchValueF1.toLowerCase())
    );
  }

}
