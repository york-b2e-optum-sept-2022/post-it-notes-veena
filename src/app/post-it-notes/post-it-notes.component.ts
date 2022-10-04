import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IList} from "../interfaces/IList";

@Component({
  selector: 'app-post-it-notes',
  templateUrl: './post-it-notes.component.html',
  styleUrls: ['./post-it-notes.component.css']
})
export class PostItNotesComponent implements OnInit {




  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }




}
