import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, gender: string, bio: string, interest: string, image: string, favoritegenre: string, currentsong: string) {
    var newMember: Member = new Member(name, age, gender, bio, interest, image, favoritegenre, currentsong);
    console.log(newMember);
  }

}
