import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SlideComponent } from './shared/slide/slide.component';
import { FormsModule } from '@angular/forms';
import { ControllService } from './controll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    SlideComponent,
    FormsModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  controll = inject(ControllService);

  constructor() {
    this.controll.setStandardLanguage();
  }
}
