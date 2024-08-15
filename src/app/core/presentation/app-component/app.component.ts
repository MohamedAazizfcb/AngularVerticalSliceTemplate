import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnvironmentService } from '../../infrastructure/implementations/environment.service';
import { LoggerService } from '../../application/implementations/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private lo: LoggerService,
  ){  
  }

  ngOnInit(){
    this.lo.info("AAAAAAAAAAAAAAAAAAaa");
  }
  
}
