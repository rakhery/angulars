import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import {RouterModule, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterOutlet,RouterModule],
  exports: [
    IconsModule,
    LoginModule,
    TemplatesModule,
    UiModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
