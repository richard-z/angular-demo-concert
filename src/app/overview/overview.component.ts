import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertService } from '../concert.service';
import { Concert } from '../concertInterface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent implements OnInit {

  concertsInView: Concert[] = [];

  constructor(private concertService: ConcertService, private router: Router) { }

  ngOnInit(): void {
    this.loadConcertsToView();
  }

  loadConcertsToView() {
    this.concertService.getConcerts().subscribe(result => {
      this.concertsInView = result;
    });
  }

  deleteConcertButton(id: number) {
    this.concertService.deleteConcert(id).subscribe();
    this.loadConcertsToView();
  }

  editConcertButton(id: number) {
    
    this.router.navigate(['edit/' + id]);
  }

}
