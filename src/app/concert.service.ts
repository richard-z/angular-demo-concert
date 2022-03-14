import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concert } from './concertInterface';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  concertApiUrl = '/api/concerts'

  constructor(private httpClient: HttpClient) { }

  getConcerts(): Observable<Concert[]> {
    var response = this.httpClient.get<Concert[]>(this.concertApiUrl);
    return response;
  }

  getConcertById(id: number) : Observable<Concert> {
    var response = this.httpClient.get<Concert>(this.concertApiUrl + "/" + id);
    return response;
  }

  saveConcert(concert: Concert): Observable<Concert> {

    var response = this.httpClient.post<Concert>(this.concertApiUrl + "/" + concert.id, concert);
    return response;
  }

  deleteConcert(id: number): Observable<Concert> {

    var response = this.httpClient.delete<Concert>(this.concertApiUrl + "/" + id);
    return response;
  }

}
