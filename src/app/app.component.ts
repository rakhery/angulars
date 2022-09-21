import { Component } from '@angular/core';
// decorateur Composant
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // public, private (render view  imposible)
  title = 'crm';
  // public title : string | undefined; soit string ou non definit
  // public title : ? et !  pour un raccourci plus rapide; soit string ou non definit
  // contructeur
  constructor() {
    // this.title="crm"; soit initialisat° par l'attribut, soit dans le construteur
    // C'est pratique qdl'initialisat° est très longe dans l'attribut

  }

}
/*
  -Prour créer un composant, il faut le rendre le plus stupide possible pour réutiliser possible
  - But Maintenabilité du code et DRY
  - Pour communiquer il faut créer des services
 */
