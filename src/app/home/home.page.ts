import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;
  emailError: string = 'Campo de email no valido';
  passError: string = 'Campo de password no valido';
  username: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.form = this.fb.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    })
  }

  logForm() {
    console.log(this.form);
  }
  goTo(url: string) {
    this.router.navigate([url]);
  }
  login() {
    this.dataService.login(this.username, this.password).subscribe((success) => {
      if (success) {
        console.log('Inicio de sesión exitoso');
      } else {
        console.log('Inicio de sesión fallido');
      }
    });
  }

}
