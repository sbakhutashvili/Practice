import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Students} from "../user.interface";


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  @Input() student: Students | undefined | null;
  @Output() saveEvent = new EventEmitter<Students | undefined | null>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.saveEvent.emit(this.student);
  }

}
