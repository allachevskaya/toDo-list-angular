import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.modul';

@Component({
  selector: 'app-edit-to-do-dialog',
  templateUrl: './edit-to-do-dialog.component.html',
  styleUrls: ['./edit-to-do-dialog.component.scss']
})
export class EditToDoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditToDoDialogComponent>, @Inject(MAT_DIALOG_DATA) public todo:Todo ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  onFormSubmit(form:NgForm){}

}
