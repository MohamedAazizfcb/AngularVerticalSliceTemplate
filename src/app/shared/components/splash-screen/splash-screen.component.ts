import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
})
export class SplashScreenComponent {
  isLoading: boolean = true;
  splashTime: number = 2000;
  private platformId: Object = inject(PLATFORM_ID);

  ngOnInit() {
    if(isPlatformBrowser(this.platformId))
    {
      setTimeout(() => {
        this.isLoading = false;
      }, this.splashTime);
    }
  }
}
