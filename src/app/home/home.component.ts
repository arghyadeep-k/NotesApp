import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes:any;
  
  constructor(private _noteService:NoteService ) {}

  ngOnInit() {
    this._noteService.getNotes()
      .subscribe(res => this.notes = res);
  }

}
