
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {
  constructor(protected authService: AuthService, private router: Router ){}

  ngOnInit(): void {
    if (this.authService.isAuth.getValue()) {
      this.router.navigate(['account']);
    }
  }
}
