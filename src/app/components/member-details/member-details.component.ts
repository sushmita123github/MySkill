import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';
//import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent implements OnInit{
  member:Member={id:0, name:'',email:'',address:''};

  constructor(private route:ActivatedRoute, private memberService:MemberService){}

  ngOnInit(): void {
    // this.route.paramMap.pipe(
    //   switchMap(params=>{
    //     const memberId= +params.get('id')!;
    //    // console.log(memberId);
    //     return this.memberService.getMemberById(memberId);
    //   })
    // ).subscribe(
    //   (member:Member)=>{
    //     this.member=member;
    //     console.log('Member details loaded successfully:',this.member);
    //   },
    //   (error)=>{
    //     console.error('Error loading member details:',error);
    //   }
    // );

    this.getMemberDetails();
  }

  getMemberDetails():void {
    
    const memberId=+this.route.snapshot.paramMap.get('id')!;
    console.log("memberid",memberId)
    if(memberId){
      this.memberService.getMemberById(memberId).subscribe(
        (member:Member)=>{
          this.member=member;
          console.log('Member details loaded successfully:',this.member);
        },
        (error)=>{
          console.error('Error loading member details:',error);
        }
      );
    }else{
      console.error('Member ID is null or undefined');
    }
  }
}
