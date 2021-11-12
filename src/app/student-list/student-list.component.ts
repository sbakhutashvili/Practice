import { Component, OnInit } from '@angular/core';
import {Students} from "../user.interface";
import {students} from "../mock-users";


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Students[] = [];
  selectedUser: Students | undefined | null;
  showUserForm: boolean = false;
  studentToAdd: Students = {
    id: 0,
    name: '',
    surname: '',
    studentCode: 0,
    followingCourses: [0],
    EnrolledYear: 0,
  };

  constructor() { }

  ngOnInit(): void {
    console.log("init")
    this.students = students;
  }

  selectStudent(id: number) {
    const selectedUser = this.students.find(e => e.id == id);
    this.selectedUser = Object.assign({}, selectedUser);
  }

  save(student: Students | undefined | null) {
    if (student) {
      //1st way
      const id = student.id;
      const indx = this.students.findIndex(e => e.id === id);
      if (indx > -1) {
        this.students[indx] = student;
      }
    }
  }

  deleteStudent(id: number) {
    const indx = this.students.findIndex(e => e.id == id);
    if (indx > -1) {
      this.students.splice(indx, 1);
      this.selectedUser = null;
    }
  }

  showAddStudentForm() {
    this.selectedUser = null;
    this.showUserForm = true;
  }

  addStudent() {
    let maxId = 0;
    for (let i = 0, l = this.students.length; i < l; i++) {
      if (this.students[i].id > maxId) {
        maxId = this.students[i].id;
      }
    }
    this.studentToAdd.id = ++maxId;
    this.students.push(this.studentToAdd);
    this.showUserForm = false;
    //this is to clear form when add user again
    this.studentToAdd = {
      id: 0,
      name: '',
      surname: '',
      studentCode: 0,
      followingCourses: [0],
      EnrolledYear: 0
    };
  }
}
