import { Component, inject, HostListener } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CommonModule } from '@angular/common';
import { ControllService } from './../../controll.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [AboutmeComponent, CommonModule],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  controll = inject(ControllService);
  currentPixel!: number;

  constructor() {}

  ngOnInit(): void {
    this.updatePixelWidth();
    this.controll.observeElements();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updatePixelWidth();
  }

  updatePixelWidth(): void {
    this.currentPixel = window.innerWidth;
  }
}
