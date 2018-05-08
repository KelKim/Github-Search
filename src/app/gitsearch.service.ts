import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

@Injectable()
export class GitsearchService {

	user:User;
	repository:Repository;
  	
  	constructor(private http: HttpClient) { 
  		this.user = new User(0,"",0);
  	}

}
