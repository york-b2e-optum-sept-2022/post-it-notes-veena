import { Injectable } from '@angular/core';
import {IList} from "./interfaces/IList";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

title = "post-it-notes";

private isAdding: boolean = false;
$isAdding = new Subject<boolean>();


  private postItList: IList[] = [
{
  id: '1',
  input:'string',
  date:new Date()
  }
  ]
  $postItList = new Subject<IList[]>();

  constructor() { }

onClickNew(newpostIt: IList){
    this.postItList.push(newpostIt);
}

onAdding(){
    this.$isAdding.next(this.isAdding)
}





}
