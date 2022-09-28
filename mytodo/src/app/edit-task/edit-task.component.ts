import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditTaskComponent>,@Inject(MAT_DIALOG_DATA) public task:Task) { }

  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm){

  }
  close(){
    this.dialogRef.close()
  }

}
