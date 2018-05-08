import { Component, OnInit,Output } from '@angular/core';
import { GitsearchService } from '../gitsearch.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  user:User;
  username: string;
  gitsearchService:GitsearchService;
  hideResults:boolean;

  submitUser(){
    this.gitsearchService.getUserData(this.username);
    this.hideResults = true;
  }

  constructor(gitsearchService:GitsearchService) { 
    this.gitsearchService = gitsearchService;
  }

  ngOnInit() {
    this.repository = this.gitsearchService.repoData;
  }

}
