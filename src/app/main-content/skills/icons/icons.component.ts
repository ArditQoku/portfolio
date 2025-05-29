import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllService } from './../../../controll.service';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent {
  controll = inject(ControllService);
}
