import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  username: string;

  submitUser(){
    console.log(this.username);
  }

  constructor() { }

  ngOnInit() {
  }

}
