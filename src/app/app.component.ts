import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from 'rxjs';

class ClasseObserver  implements Observer<number>{
  next(data:number){
    console.log('observer avec une classe 4 :'+data);
  }
  error(error:string){
    console.log(error);
  }
  complete(){
    console.log()
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'crm';
  }
  ngOnInit(): void {
    //Sujet
    const nouveuObservable=new Observable<number>((observer:any)=>{
      //Envoyer les données observables
      for(let i=0;i<9;i++) {

        let timer=0;
        //Ajout de temporisation de 4 secondes
        setTimeout(()=>{
          //Simuler une erreur dans le sujet à observer
          /*if(i==7)
            observer.error("Erreur non identifiées pour la valeur i=7");*/
          observer.next(i);
        },4000);

      }
      //observer.complete();//quand l'erreur n'est pas declenchée qd il y a une erreur
    });

    //Observeur
    let observer={
      next:(data:number)=>console.log(data),
      error:(error:string)=>console.log(error),
      complete:()=>console.log("Observation complète!"),
    };
    //Abonner au sujet observable
    nouveuObservable.subscribe(observer);

    //2èm methode de création d'observateur
    nouveuObservable.subscribe({
      next:(data:number)=>console.log('observateur 2 '+data),
      error:(error:string)=>console.log(error),
      complete:()=>console.log("Observation n°2  complète!"),
    });
    //3èm methode d'implementation
    nouveuObservable.subscribe(
      (data:number)=>console.log('observateur 3 '+data),
      (error:string)=>console.log(error),
      ()=>console.log("Observation n°3 complète!"),
    );
    //Implementer  un observateur à partir d'une classe
    nouveuObservable.subscribe(new ClasseObserver());

  }
}
