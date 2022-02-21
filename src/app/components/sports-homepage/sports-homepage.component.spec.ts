import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { SportsHomepageComponent } from './sports-homepage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SportsService } from 'src/app/services/sports.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// class MockSportsService {
//   sportsData = {
//     Tennis: [
//       {
//         looser: "Schwartzman ",
//         numberOfSets: 3,
//         publicationDate: "May 9, 2020 11:15:15 PM",
//         tournament: "Roland Garros",
//         winner: "Rafael Nadal"
//       },
//       {
//         looser: "Stefanos Tsitsipas ",
//         numberOfSets: 3,
//         publicationDate: "May 9, 2020 2:00:40 PM",
//         tournament: "Roland Garros",
//         winner: "Novak Djokovic"
//       }
//     ],
//     f1Results: [],
//     nbaResults: []
//   };
// }

describe('SportsHomepageComponent', () => {
  let component: SportsHomepageComponent;
  let fixture: ComponentFixture<SportsHomepageComponent>;
  // let stubTennis = [
  //   {looser: 'Schwartzman ', numberOfSets: 3, publicationDate: 'May 9, 2020 11:15:15 PM', tournament: 'Roland Garros', winner: 'Rafael Nadal'},
  //   {looser: 'Stefanos Tsitsipas ', numberOfSets: 3, publicationDate: 'May 9, 2020 2:00:40 PM', tournament: 'Roland Garros', winner: 'Novak Djokovic'},
  //   {looser: 'Petra Kvitova', numberOfSets: 3, publicationDate: 'May 8, 2020 4:33:17 PM', tournament: 'Roland Garros', winner: 'Sofia Kenin'}
  // ];
  let testServiceStub: any;

  beforeEach(async () => {
    testServiceStub = {
      getSports(): Observable<any>{
        return of({
          Tennis: [
              {looser: 'Schwartzman ', numberOfSets: 3, publicationDate: 'May 9, 2020 11:15:15 PM', tournament: 'Roland Garros', winner: 'Rafael Nadal'},
              {looser: 'Stefanos Tsitsipas ', numberOfSets: 3, publicationDate: 'May 9, 2020 2:00:40 PM', tournament: 'Roland Garros', winner: 'Novak Djokovic'},
              {looser: 'Petra Kvitova', numberOfSets: 3, publicationDate: 'May 8, 2020 4:33:17 PM', tournament: 'Roland Garros', winner: 'Sofia Kenin'}
            ],
          f1Results: [
              {publicationDate: 'May 9, 2020 8:09:03 PM', seconds: 5.856, tournament: 'Silverstone Grand Prix', winner: 'Lewis Hamilton'},
              {publicationDate: 'Apr 14, 2020 8:09:03 PM', seconds: 7.729, tournament: 'VTB RUSSIAN GRAND PRIX', winner: 'Valtteri Bottas'},
              {publicationDate: 'Mar 15, 2020 8:09:03 PM', seconds: 5.856, tournament: 'Spa BELGIAN GRAND PRIX', winner: 'Lewis Hamilton'}
          ],
          nbaResults: [
              {gameNumber: 6, looser: 'Heat', mvp: 'Lebron James', publicationDate: 'May 9, 2020 9:15:15 AM', tournament: 'NBA playoffs', winner: 'Lakers'},
              {gameNumber: 5, looser: 'Lakers', mvp: 'Jimmy Butler', publicationDate: 'May 7, 2020 3:15:00 PM', tournament: 'NBA playoffs', winner: 'Heat'},
              {gameNumber: 4, looser: 'Heat', mvp: 'Anthony Davis', publicationDate: 'May 5, 2020 1:34:15 PM', tournament: 'NBA playoffs', winner: 'Lakers'},
              {gameNumber: 3, looser: 'Lakers', mvp: 'Jimmy Butler', publicationDate: 'May 3, 2020 9:15:33 PM', tournament: 'NBA playoffs', winner: 'Heat'},
              {gameNumber: 2, looser: 'Heat', mvp: 'Anthony Davis', publicationDate: 'May 2, 2020 6:07:03 AM', tournament: 'NBA playoffs', winner: 'Lakers'}
          ]
        });
      } 
    }

    await TestBed.configureTestingModule({
      declarations: [ SportsHomepageComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        {provide: SportsService, useValue: testServiceStub}
        // SportsService
        // {provide: SportsService, useClass: MockSportsService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call getSports()', fakeAsync( () => {
  //   let sportsService = fixture.debugElement.injector.get(SportsService);
  //   let stub = spyOn(sportsService, "getSports").and.callFake(()=>{
  //       // return observable
  //       // delay it by 300ms to simulate an async call
  //       return of([]).pipe(delay(300));
  //   })
  //   component.getSports();
  //   tick(300);
  //   expect(component.tennisData).toEqual(stubTennis);
  // }))

  // xit('should filter based only on that sport'), () => {

  // }

  it('should get data from the service and set tennis data to tennisData', () => {
      expect(component.tennisData).toEqual([
        {looser: 'Schwartzman ', numberOfSets: 3, publicationDate: 'May 9, 2020 11:15:15 PM', tournament: 'Roland Garros', winner: 'Rafael Nadal'},
        {looser: 'Stefanos Tsitsipas ', numberOfSets: 3, publicationDate: 'May 9, 2020 2:00:40 PM', tournament: 'Roland Garros', winner: 'Novak Djokovic'},
        {looser: 'Petra Kvitova', numberOfSets: 3, publicationDate: 'May 8, 2020 4:33:17 PM', tournament: 'Roland Garros', winner: 'Sofia Kenin'}
      ]);
  });

  it('should get data from the service and set f1 data to tennisData', () => {
    expect(component.f1Data).toEqual([
        {publicationDate: 'May 9, 2020 8:09:03 PM', seconds: 5.856, tournament: 'Silverstone Grand Prix', winner: 'Lewis Hamilton'},
        {publicationDate: 'Apr 14, 2020 8:09:03 PM', seconds: 7.729, tournament: 'VTB RUSSIAN GRAND PRIX', winner: 'Valtteri Bottas'},
        {publicationDate: 'Mar 15, 2020 8:09:03 PM', seconds: 5.856, tournament: 'Spa BELGIAN GRAND PRIX', winner: 'Lewis Hamilton'}
    ]);
  });

  it('should get data from the service and set nba data to tennisData', () => {
    expect(component.nbaData).toEqual([
        {gameNumber: 6, looser: 'Heat', mvp: 'Lebron James', publicationDate: 'May 9, 2020 9:15:15 AM', tournament: 'NBA playoffs', winner: 'Lakers'},
        {gameNumber: 5, looser: 'Lakers', mvp: 'Jimmy Butler', publicationDate: 'May 7, 2020 3:15:00 PM', tournament: 'NBA playoffs', winner: 'Heat'},
        {gameNumber: 4, looser: 'Heat', mvp: 'Anthony Davis', publicationDate: 'May 5, 2020 1:34:15 PM', tournament: 'NBA playoffs', winner: 'Lakers'},
        {gameNumber: 3, looser: 'Lakers', mvp: 'Jimmy Butler', publicationDate: 'May 3, 2020 9:15:33 PM', tournament: 'NBA playoffs', winner: 'Heat'},
        {gameNumber: 2, looser: 'Heat', mvp: 'Anthony Davis', publicationDate: 'May 2, 2020 6:07:03 AM', tournament: 'NBA playoffs', winner: 'Lakers'}
    ]);
  });

  // xit('should show certain html elements'), () => {

  // }

});
