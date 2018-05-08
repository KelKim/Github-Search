import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

@Injectable()
export class GitsearchService {

	user:User;
	repository:Repository;
  	
  	constructor() { }

}
