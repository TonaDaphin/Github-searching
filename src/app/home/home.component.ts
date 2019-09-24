import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newUser:string;
  repos:any[];
  public gs: any[];

  constructor(
    public gsService:HomeService,
    ) { }
    addNew(){
      let promise = new Promise((resolve,reject) => {
        this.gsService.getUser().toPromise().then(gs => {
          console.log(gs)
          this.gs = gs;
          resolve()
        },error => {
          console.log(error)
          this.gs = error;
          reject(error)
        })
        this.gsService.updateUser(this.newUser);
        this.gsService.getRepo().toPromise().then(repos => {
          console.log(repos)
          this.repos = repos;
          resolve()
        },error =>{
          console.log(error)
          this.gs = error;
          reject(error)
        })
      })
      return promise
    }
  ngOnInit() {}

}
