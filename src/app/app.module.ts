import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPostItComponent } from './add-post-it/add-post-it.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostItNotesComponent } from './post-it-notes/post-it-notes.component';
import { PostItComponent } from './post-it/post-it.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddPostItComponent,
    PostItNotesComponent,
    PostItComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
