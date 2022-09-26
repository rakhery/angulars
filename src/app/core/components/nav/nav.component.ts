import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VersionService} from '../../services/core.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  value = 0;
  step = 1;
  constructor(private _router:Router,private versionService:VersionService) { }

  ngOnInit(): void {
  }

  navigateToSignUp() {
    this._router.navigate(["/sign-up"])
  }

  navigateToSignIn() {

  }

  navigateToReset() {

  }

  navigateToForgot() {

  }

  incrementVersion() {
    this.versionService.incrementVersion();
  }
}
