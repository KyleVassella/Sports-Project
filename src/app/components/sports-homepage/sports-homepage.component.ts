import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports-homepage',
  templateUrl: './sports-homepage.component.html',
  styleUrls: ['./sports-homepage.component.css']
})
export class SportsHomepageComponent implements OnInit {

  constructor(private sportsService: SportsService) { }

  sportsData: Object = {};
  tennisData: Array<any> = [];
  f1Data: Array<any> = [];
  nbaData: Array<any> = []

  ngOnInit(): void {
    this.retrieveSports();
  }

  ngOnDestroy(): void {

  }

  retrieveSports() {
    this.sportsService.retrieveSports().subscribe(
      (data)=>{
        this.sportsData = data;
        this.tennisData = data.Tennis;
        /////// data is already sorted in reverse chronological order, but to sort to chronilogical order:
        // this.tennisData = data.Tennis.sort((a, b) => new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime());
        // console.log(new Date(this.tennisData[0].publicationDate).getTime());
        this.f1Data = data.f1Results;
        this.nbaData = data.nbaResults;
         console.log(this.sportsData, this.tennisData, this.f1Data, this.nbaData)},
      (error:any) => console.error("There was an error:", error),
      ()=>console.log("Fetching complete!")
    )
  }

}
