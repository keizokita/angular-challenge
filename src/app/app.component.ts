import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge-project';

  showMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }
}
