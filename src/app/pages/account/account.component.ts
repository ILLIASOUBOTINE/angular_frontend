import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: User;
  constructor(protected authService: AuthService, private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUser(this.authService.access_token.getValue()).subscribe(
      (response)=> {
        this.user = response['user'];
        console.log(this.user);
        
      }

    )
  }
}
