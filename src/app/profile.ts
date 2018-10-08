import { Component } from '@angular/core';
import {LinkedIcons} from './LinkedIcons';

@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styleUrls: ['./app.component.css']
})
export class Profile {
  icons = [
    new LinkedIcons('fa fa-facebook',
      'https://www.facebook.com/chimbs'),
    new LinkedIcons('fa fa-twitter',
      'https://twitter.com/chimbs'),
    new LinkedIcons('fa fa-instagram',
      'https://www.instagram.com/chimbs86/'),
    new LinkedIcons('fa fa-pinterest-p',
      'https://www.facebook.com/chimbs')
  ];

  myName = 'Gaurav Raje';
  srcUrl = 'images/avatar/avatar-195x195.png';
  srcSetUrl = 'images/avatar/avatar-390x390-2x.png 2x';
  occupation = 'Software Developer';
  resumeUrl = 'assets/resumeGauravRajeOffline.pdf';
  resumeTarget= '_blank';
}
