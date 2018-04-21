import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InquiryService } from '../inquiry.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public inquiryService: InquiryService) {
   }

  ngOnInit() {
   
  }

  onSubmit(inquiryForm: NgForm) {
    this.inquiryService.addInquiry(inquiryForm.value);
    console.log(inquiryForm.value);
    this.resetForm(inquiryForm);
  }
 

  resetForm(inquiryForm?: NgForm) {
    if (inquiryForm != null)
    inquiryForm.reset();
    this.inquiryService.selectedInquiry={
    name:'',
    email:'',
    phone:'',
    gender:'',
    message:''
    }
  }


}

