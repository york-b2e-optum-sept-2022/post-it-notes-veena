import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IList} from "../interfaces/IList";
import {DataService} from "../data.service";

@Component({
  selector: 'app-add-post-it',
  templateUrl: './add-post-it.component.html',
  styleUrls: ['./add-post-it.component.css']
})
export class AddPostItComponent implements OnInit {

  postit : IList={
    id: '',
   input:'',
    date: new Date,
  }
  constructor(private dataService: DataService ) {
  }

  ngOnInit(): void {
  }



  onClickNew(){
    this.dataService.onClickNew(this.postit);
    console.log(this.postit)
  }

}
