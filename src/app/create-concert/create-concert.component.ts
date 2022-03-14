import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConcertService } from '../concert.service';
import { Concert } from '../concertInterface';

@Component({
  selector: 'app-create-concert',
  templateUrl: './create-concert.component.html',
  styleUrls: ['./create-concert.component.sass']
})
export class CreateConcertComponent implements OnInit {

  concertModel: Concert = {
    id: 0,
    bandName: '',
    description: '',
    startDate: new Date(),
    outdoor: false,
    place: ''
  };

  constructor(private concertService: ConcertService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //TODO: display spinner

    // edit an existing concert 
    if (this.router.url.match('/edit')) {
      // get the id of desired concert from url
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      // fetch the concert data
      this.concertService.getConcertById(id).subscribe((result) => {
        // display them via the model
        this.concertModel = result;
      });
    } else {
      // a new concert is created which needs a new id
      this.getAndSetNewId();
    }
  }

  /**
   * this is a backend task, for the demo purpose we simple do this here
   * set a new Id to the concertModel
   */
  private getAndSetNewId() {

    this.concertService.getConcerts().subscribe(result => {

      // get current ids of concerts
      var ids = result.map(concert => {
        return concert.id;
      });
      // 'unpacks' the array, since Math.max does not support it
      let max = Math.max(...ids);

      this.concertModel.id = max + 1;
    });
  }

  saveConcertForm(): void {
    let response = this.concertService.saveConcert(this.concertModel).subscribe();
    this.router.navigate(['overview']);
  }

}
