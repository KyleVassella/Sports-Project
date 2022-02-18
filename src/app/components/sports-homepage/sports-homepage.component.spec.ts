import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsHomepageComponent } from './sports-homepage.component';

describe('SportsHomepageComponent', () => {
  let component: SportsHomepageComponent;
  let fixture: ComponentFixture<SportsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsHomepageComponent ]
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
});
