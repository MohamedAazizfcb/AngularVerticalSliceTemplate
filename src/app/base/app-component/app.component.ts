import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrComponent } from "../../shared/features/toastr/toastr-component/toastr.component";
import { SplashScreenComponent } from '../../shared/components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastrComponent, SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Hide splash screen after initialization
    }, 3000); // Adjust the timeout as needed or base it on async operations
  }
}
