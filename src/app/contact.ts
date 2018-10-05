import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';




@Component({
  selector: 'contact',
  templateUrl: './contact.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class Contact {
  constructor(private http: HttpClient) { }
  headers = new Headers();


  address = 'Woodside - Queens NY';
  phone = '720-924-66two7';
  email = 'gaurav.raje07+website@gmail.com';
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });
  onSubmit() {
  }

  private handler() {
    alert('error');
    return throwError(
      'Something bad happened; please try again later.');
  }
}
