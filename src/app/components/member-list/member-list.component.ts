import { Component , OnInit} from '@angular/core';
import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit{

  members:Member[]=[];
  constructor(private memberService: MemberService, private router: Router){}

  ngOnInit(): void {
      this.getAllMembers();
  }

  getAllMembers():void{
    this.memberService.getAllMembers().subscribe(
      (members:Member[])=>{
        this.members=members;
        console.log('Members loaded successfully:',this.members);
      },
      (error)=>{
        console.error('Error loading members:',error);
      }
    );
  }

  viewMemberDetails(memberId:number):void{
    this.router.navigate(['/members',memberId]);
  }
}
