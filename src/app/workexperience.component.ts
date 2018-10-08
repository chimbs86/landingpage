import { Component } from '@angular/core';
import {Work} from './Work';

@Component({
  selector: 'workexperience',
  templateUrl: './workexperience.html',
  styleUrls: ['./app.component.css']
})
export class WorkExperience {
  works = [
new Work('Enterprise Software Developer',
  'Integral Ad Science',
  'Oct 2014 - present',
  'I have become the "Go To" person when it comes to my project. I have architected a complete rewrite of the application, ' +
  'a 60% performance upgrade, introduced thorough end to end testing framework as well as other frameworks to the codebase.' +
  "Don't Believe me? I contributed to our Tech Blog outlining the steps I took to achieve this miracle - https://insider.integralads.com/beat-java-bottlenecks/"),

    new Work('Platform Developer',
      'Pulsepoint Inc',
      'Oct 2012 - Oct 2014',
      'Helped upgrade the technology stack from java 6 to 7, ' +
      'along with thorough performance tuning. Also helped in various integrations with partners.'),

    new Work('Software Engineer',
      'Amobee (erstwhile Adconion Media Group)',
      'May 2011 - Oct 2012',
      'Worked as a part of a team that was responsible for high throughput low latency applications. ')
  ];

}
