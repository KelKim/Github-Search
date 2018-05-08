import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

@Injectable()
export class GitsearchService {

	user:User;
	// repository:Repository;
  	
  	constructor(private http: HttpClient) { 
  		this.user = new User("",0,"",new Date());
  	}

  	getUserData(username: String){
  		
  	interface ApiResponse {
  		login: string,
  		public_repos: number,
  		avatar_url: string,
  		updated_at:Date
    }

    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
            
            this.user.login=response.login;
            this.user.avatar_url=response.avatar_url;
            this.user.public_repos=response.public_repos;
            this.user.updated_at=response.updated_at;

            resolve()
        },
        error=>{
                reject(error)
        }

        this.http.get<ApiResponse>("https://api.github.com/users/" + username + "/repos).toPromise().then(response=>{
            

            resolve()
        },
        error=>{
                reject(error)
            }


        )
    })

    return promise
  }
}


