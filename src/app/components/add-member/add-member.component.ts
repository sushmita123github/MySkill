import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';
import { map } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent {
 
  constructor(private memberService:MemberService){}

  onSubmit(form:NgForm){
    if(form.valid){
      this.memberService.getAllMembers().pipe(
        map((members:Member[])=>{
          const highestId=Math.max(...members.map(member=>member.id));
          const newId=highestId+1;
          return {newId, formValue: form.value};
        })
      )
      .subscribe(
        ({newId,formValue})=>{
      const newMember: Member={
        id:newId,
        name:form.value.fullName,
        email:form.value.email,
        address:form.value.address,
      };
      this.memberService.addMember(newMember).subscribe(()=>{
          console.log('Member added successfully:',newMember);
          form.resetForm();
        },
        (error)=>{
          console.error('Error adding member:',error);
        }
      );
    }, (error)=>{
      console.error('Error retrieving members:',error);
    }
    );
  }
 }
}