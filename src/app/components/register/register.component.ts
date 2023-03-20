import { RegisterService } from './../../services/register.service';
import { Router } from '@angular/router';
import { register } from './../../models/register.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  model : register = {
    email: '',
    password: '',
    person: {
      firstName: '',
      lastname: '',
    }
  };

  constructor(private router: Router, private registerService: RegisterService) { }

  register(): any{
    this.registerService.register(this.model).subscribe(
      (data: any) => {
        this.router.navigate(['login']);
        alert('Usuario registrado correctamente');
      }
    );
  }

}
