import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private db: AngularFireDatabase) { }

  getCourses(){
   return this.db.list('/courses');
  }
}
