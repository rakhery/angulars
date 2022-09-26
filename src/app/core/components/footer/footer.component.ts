import { Component, OnInit } from '@angular/core';
import {VersionService} from '../../services/core.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version!:number;
  constructor(private versionService: VersionService) {
    this.versionService.numVersion.subscribe((data) => {
      console.log(data);
      this.version = data;
    });
  }

  ngOnInit(): void {
    this.versionService.incrementVersion();
  }


}
