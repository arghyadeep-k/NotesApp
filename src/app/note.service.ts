import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes:any;

  constructor(private _http:HttpClient) { }

  getNotes() {
    return this._http.get("api/getNotes");
      // .subscribe(res => {
      //   this.notes = res;
      // });
  }
}
