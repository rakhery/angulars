import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) {
    // @ts-ignore
    console.log(this.router.getCurrentNavigation().extras.state.source);
  }

  ngOnInit(): void {
  }

}
