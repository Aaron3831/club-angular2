import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, gender: string, bio: string, interest: string, image: string, favoritegenre: string, currentsong: string) {
    var newMember: Member = new Member(name, age, gender, bio, interest, image, favoritegenre, currentsong);
    this.memberService.addMember(newMember);
  }

}
