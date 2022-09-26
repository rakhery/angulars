import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit,OnChanges {
/* elle s'effectue après le constructeur cf.LyfeCycleHooks
   ngOnChanged() il faut surveiller l'input  ---> Declence ChangeDetection---> rafraichir la vue
 */
  @Input() public title: string;
  //On ne peut jamais récupérer dans le contructeur
  constructor() {
    this.title = 'Le titre est ici'
  }
  //Utiliser si on veut initilaliser directemen,t
  ngOnInit(): void {
    console.log(this.title);
  }




  ngOnChanges(): void {
    console.log(this.title);
  }

}
