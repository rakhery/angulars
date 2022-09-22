import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {

  close: boolean=true;
  nav: boolean=true;
  edit: boolean=true;
  delete: boolean=true;


  constructor() {
    this.close = false;
  }

  ngOnInit(): void {}

  public toggle(): void {
    this.close = !this.close
  }
}
