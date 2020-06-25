import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   email: FormControl;
   emailregis: FormControl;
   hide = true;

  constructor() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.emailregis = new FormControl('', [Validators.required, Validators.email]);
   }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Escribe un email válido';
    }

    return this.email.hasError('email') ? 'Email no válido' : '';
  }
  getErrorMessagee() {
    if (this.emailregis.hasError('required')) {
      return 'Escribe un email válido';
    }

    return this.emailregis.hasError('email') ? 'Email no válido' : '';
  }

}
