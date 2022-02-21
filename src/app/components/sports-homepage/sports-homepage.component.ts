import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';
import { ITennis, IF1, INba } from 'src/app/interfaces/sports';

@Component({
  selector: 'app-sports-homepage',
  templateUrl: './sports-homepage.component.html',
  styleUrls: ['./sports-homepage.component.css']
})
export class SportsHomepageComponent implements OnInit {

  constructor(private sportsService: SportsService) { }

  sportsSubscriptions: Array<any> = [];

  sportsData: Object = {};

  tennisData: ITennis[] = [];
  filteredTennisData: ITennis[] = [];

  // ngModel backing field (tennis)
  private _searchValueTennis: string;
  // searchValueTennis:string;

  // getter (tennis)
  get searchValueTennis(): string {
    return this._searchValueTennis;
  }

  // setter (tennis)
  set searchValueTennis(value: string) {
    this._searchValueTennis = value;
    this.filteredTennisData = this.filterTennisData(value);
  }

  filterTennisData(searchString: string) {
      return this.tennisData.filter(tennis => 
        tennis.looser.toLowerCase().includes(this.searchValueTennis.toLowerCase()) ||
        tennis.numberOfSets.toString().toLowerCase().includes(this.searchValueTennis.toLowerCase()) ||
        tennis.publicationDate.toLowerCase().includes(this.searchValueTennis.toLowerCase()) ||
        tennis.tournament.toLowerCase().includes(this.searchValueTennis.toLowerCase()) ||
        tennis.winner.toLowerCase().includes(this.searchValueTennis.toLowerCase())
      );
  }

  f1Data: IF1[] = [];
  filteredF1Data: IF1[] = [];
  private _searchValueF1: string;

  get searchValueF1(): string {
    return this._searchValueF1;
  }

  set searchValueF1(value: string) {
    this._searchValueF1 = value;
    this.filteredF1Data = this.filterF1Data(value);
  }

  filterF1Data(searchString: string) {
    return this.f1Data.filter(f1 => 
      f1.publicationDate.toLowerCase().includes(this.searchValueF1.toLowerCase()) ||
      f1.seconds.toString().toLowerCase().includes(this.searchValueF1.toLowerCase()) ||
      f1.tournament.toLowerCase().includes(this.searchValueF1.toLowerCase()) ||
      f1.winner.toLowerCase().includes(this.searchValueF1.toLowerCase())
    );
  }

  nbaData: INba[] = [];
  // searchValueNba:string;
  private _searchValueNba: string;
  filteredNbaData: INba[] = [];

  get searchValueNba(): string {
    return this._searchValueNba;
  }

  set searchValueNba(value: string){
    this._searchValueNba = value;
    this.filteredNbaData = this.filterNbaData(value);
  }

  filterNbaData(searchString: string) {
    return this.nbaData.filter(nba => 
      nba.gameNumber.toString().toLowerCase().includes(this.searchValueNba.toLowerCase()) ||
      nba.looser.toLowerCase().includes(this.searchValueNba.toLowerCase()) ||
      nba.mvp.toLowerCase().includes(this.searchValueNba.toLowerCase()) ||
      nba.publicationDate.toLowerCase().includes(this.searchValueNba.toLowerCase()) ||
      nba.tournament.toLowerCase().includes(this.searchValueNba.toLowerCase()) ||
      nba.winner.toLowerCase().includes(this.searchValueNba.toLowerCase())
    );
  }


  ngOnInit(): void {
    this.getSports();
  }

  ngOnDestroy(): void {
    this.sportsSubscriptions.forEach(
      subscription => subscription.unsubscribe()
    );
  }

  getSports() {
    this.sportsSubscriptions.push(
      this.sportsService.getSports().subscribe(
        (data)=>{
          this.sportsData = data;

          // Data is sorted in reverse chronological order. To sort chronologically:
          // this.tennisData = data.Tennis.sort((a, b) => new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime());
          this.tennisData = data.Tennis;
          this.filteredTennisData = this.tennisData;
         
          this.f1Data = data.f1Results;
          this.filteredF1Data = this.f1Data;

          this.nbaData = data.nbaResults;
          this.filteredNbaData = this.nbaData;

          console.log(this.sportsData, this.tennisData, this.f1Data, this.nbaData)},
        (error:any) => console.error("There was an error:", error),
        ()=>console.log("Fetching complete!")
      )
    );
  }

  onMouseMove() {
    // to show why impure pipes are bad, let's expose the mouse move event
  }

}
