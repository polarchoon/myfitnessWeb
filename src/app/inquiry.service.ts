import { Injectable } from '@angular/core';
import { Inquiry } from './inquiry';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class InquiryService {

  inquiryList: AngularFireList<any>;
  selectedInquiry: Inquiry = new Inquiry();

  constructor(public afDb: AngularFireDatabase) {
    this.inquiryList = this.afDb.list('/inquiries');
  }

  // getData(){
  //   this.inquiryList = this.afDb.list('/inquiries');
  //   return this.inquiryList;
  // }

  addInquiry(inquiry : Inquiry)
  {
    this.inquiryList.push({
      name:inquiry.name,
      email:inquiry.email,
      phone:inquiry.phone,
      gender:inquiry.gender,
      message:inquiry.message
    });
  }

}
