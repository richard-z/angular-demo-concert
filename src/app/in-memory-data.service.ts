import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Concert } from './concertInterface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb () {
    let concerts : Concert[] = [
      { id: 0, bandName: 'Clueso', description: 'Wer sich nach dem genialen wie tollpatschigen Inspektor Clouseau, gespielt von Peter Sellers, benennt, beweist schon mal eine feine Nase für Humor und Selbstironie. Der 1980 in Erfurt geborene Thomas Hübner aka Clueso ist jedoch weit entfernt von polizeilichen Ermittlungen im Filmbusiness, obwohl sein Werdegang zum Emcee durchaus einige lustige Anekdoten enthält. Da wäre zum Beispiel die verbockte Theorieprüfung zum Friseur ...', outdoor: false, startDate: new Date, place: 'Messehalle Erfurt' },
      { id: 1, bandName: 'Ramm Tamm Tilda', description: 'Für uns ist die Bühne zu quadratisch – das Wort Publikum zu statisch. Wenn wir Musik spielen, dann nicht vor sondern mit Menschen. Menschen froh im Sinn – bunt in der Seele – offen in Herz und Geist – bei einem geteilten Augenblick der kollektiven Unvernünftigkeit…', outdoor: true, startDate: new Date, place: 'Fete de la Musique' },
      { id: 2, bandName: 'Philharmonisches Orchester Erfurt', description: 'Die Philharmonischen Kammerkonzerte des Kammermusikvereins Erfurt in Kooperation mit dem Theater Erfurt sind fester Bestandteil des Musiklebens der Stadt. Mit abwechslungsreichen Programmen widmen sich wechselnde Ensembles Klassikern und Raritäten des Repertoires vom Barock bis zur modernen Kammermusik. ', outdoor: false, startDate: new Date, place: 'Theater Erfurt' },
      { id: 3, bandName: 'B.B. King', description: 'Der US-amerikanische Künstler zählte zu den größten Blues-Musikern aller Zeiten. B.B. Kings Gitarrenspiel war virtuos und beeinflusste viele der jüngeren Generation, auch Rock-Gitarristen; das "B. B." in seinem Namen stand für "Blues Boy". Seine Inspiration erhielt er durch Bluesmusiker wie Lonnie Johnson, Blind Lemon Jefferson und Bone Walker.', outdoor: false, startDate: new Date, place: 'Messehalle Erfurt' },
    ];
    return {concerts};
  }

  constructor() { }
}
