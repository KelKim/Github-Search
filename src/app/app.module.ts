import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitsearchService } from './gitsearch.service';


@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]

})
export class AppModule { }
