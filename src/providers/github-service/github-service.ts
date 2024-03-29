
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../../models/user.interface';
import {USER_LIST} from '../../mocks/user.mocks';
import { Repository } from "../../models/repository.interface";
import { REPOSITORY_LIST } from "../../mocks/repository.mocks";
@Injectable()
export class GithubServiceProvider {

  private baseUrl:string ="https://api.github.com/users"

  constructor(public http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }
  


  getUserInformation(username:string):Observable<User>{
    return this.http.get<User>(this.baseUrl+"/"+username);
  }

  getRepositoryInformation(username:string):Observable<Repository[]>{
    return this.http.get<Repository[]>(`${this.baseUrl}/${username}/repos`);
  }

  /*
  finding the repository from within  REPOSITORY_LIST,equal to the Username passed in,
  Returing the results as an Observable
  */
  mockGetRepositoryInformation(username:string):Observable<Repository[]>{
    return  Observable.of(REPOSITORY_LIST.filter(repositary => repositary.owner.name === username))
  }

  /*
  finding the username from within  USER_LIST,equal to the Username passed in,
  Returing the results as an Observable
  */
  mockGetUserInformation(username:string): Observable<User> {
    return Observable.of(USER_LIST.filter(user =>user.name === username)[0])
  }
}
