import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='post-it-notes';

  isAdding: boolean =false;

  constructor(private dataService: DataService){
    this.title = this.dataService.title;
  }


  onAddingClick(){
    this.dataService.onAdding();

  }




}
