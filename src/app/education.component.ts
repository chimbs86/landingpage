import {Component} from '@angular/core';
import {School} from './School';
import {animate, style, transition, trigger,} from '@angular/animations';

@Component({
  selector: 'education',
  templateUrl: './education.html',
  styleUrls: ['./app.component.css']
})
export class Education {
  showDiv = true;
  schools = [
    new School('Masters in Business Administration (MBA) ',
      'New York University - Stern School of Business',
      'Currently Enrolled',
      'Specialization in finance. I take classes on the weekends. ' +
      'I have a lot of trading models that I actively code and keep up to date in order to beat the S&P 500 whenever possible. ' +
      'I also have a few models that try to predict election results, based on polling data available from various sources.'),
    new School('Master of Science in Computer Science ',
      'Rochester Institute of Technology',
      '2008 - 2011',
      'Specialization in Artificial Intelligence. My capstone project was on the use of web services to effectively ' +
      'control and monitor various sensor networks.'),


    new School('Bachelor of Engineering (IT)',
      'Mumbai University',
      '2004-2008',
      'Data Warehousing, Embedded Systems, Networking amongst other specialities.')
  ];
  toggleDiv(){
    this.showDiv = !this.showDiv;
  }
onInview(){
    alert("alert");
}
}
