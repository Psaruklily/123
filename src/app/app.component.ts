import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
import { MainServiceService } from './main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses: any[];

  constructor(private mainService: MainServiceService){}

  ngOnInit() {
    this.mainService.getCourses().valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    })
  }
}
