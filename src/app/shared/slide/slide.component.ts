import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllService } from './../../controll.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  controll = inject(ControllService);
  isSidebarOpen = false;

  ngOnInit() {
    this.controll.sidebarOpen$.subscribe((currentBoolean) => {
      this.isSidebarOpen = currentBoolean;
    });
  }

  switchLanguage(language: string) {
    this.controll.switchLanguage(language);
  }

  toggleAndScrollFunction(elementId: string, offset: number) {
    this.controll.toggleSidebar();
    this.controll.scrollToElement(elementId, offset);
  }
}
