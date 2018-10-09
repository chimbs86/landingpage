import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Router} from "@angular/router";


@Component({
  selector: 'contact',
  templateUrl: './contact.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class Contact {
  constructor(private http: HttpClient, private router: Router) {
  }

  headers = new Headers();
  url = 'https://ftsre3mvnl.execute-api.us-east-1.amazonaws.com/email?';
  enabled = true;

  contactRequest = new ContactRequest();
  response = "";

  address = 'Woodside - Queens NY';
  phone = '720-924-66two7';
  email = 'gaurav.raje07+website@gmail.com';
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });
  buttonLabel= 'Send Message';

  onSubmit() {
    console.log(this.url);
    this.enabled = false;
    this.buttonLabel = 'Sending Message';
    // this.http.post(this.url, this.contactRequest).subscribe((data: string) => this.response = data );
    this.buttonLabel = 'Message Sent';
    this.router.navigate(['sent']);

  }

  private handler() {
    alert('error');
    return throwError(
      'Something bad happened; please try again later.');
  }

  ngOnInit(): void {
    // this.router.navigate(['animals']);
  }
}

class ContactRequest {
  name = "";
  contactEmail = "";
  message = "";
}
