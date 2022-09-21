// importer les classes qu'on a besoin
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';

// decorateur des modules
//
@NgModule({
  declarations: [   // Verifier si le composant dans le module
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  // Demarrer l'applicat° avec AppComponent et a un rôle
})
export class AppModule {
  // accès aux déclarations
}
