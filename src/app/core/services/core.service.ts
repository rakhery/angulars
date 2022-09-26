import {BehaviorSubject, Observable, Observer, of, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
//Création d'observeur à partir d'une classe

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public numVersion: BehaviorSubject<number>;

  constructor() {
    this.numVersion = new BehaviorSubject<number>(1);
  }

  public incrementVersion(): void {
    console.log(this.numVersion.value + 1);
    this.numVersion.next(this.numVersion.value + 1);
  }


}

