import { RepositoriesComponent } from './../../components/repositories/repositories.component';
import { Repository } from '../../models/repository.interface';
import { GithubServiceProvider } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user.interface";
@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username:string;
  user:User;
  repositories:Repository[];
  constructor(private navCtrl: NavController,private GithubService: GithubServiceProvider, private navParams: NavParams) {
  }
  getUserInformation():void{
    this.GithubService.mockGetUserInformation(this.username).subscribe((data: User) => this.user=data);
    this.GithubService.mockGetRepositoryInformation(this.username).subscribe((data:Repository[]) => this.repositories=data);
  }
  ionViewWillLoad() {
  
    this.username =this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

}
