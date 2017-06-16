import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router, private memberService: MemberService){}

  goToDetailPage(clickedMember) {
  this.router.navigate(['members', clickedMember.$key]);
};

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}
