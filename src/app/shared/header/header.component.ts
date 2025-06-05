import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ControllService } from './../../controll.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  translate = inject(TranslateService);
  controll = inject(ControllService);
  router = inject(Router);
  viewportScroller = inject(ViewportScroller);

  switchLanguage(language: string) {
    this.controll.switchLanguage(language);
  }

  toggleSidebar() {
    this.controll.toggleSidebar();
  }
  
  scrollToSectionOnStartpage(sectionId: string, offset: number = 0) {
    if (this.router.url !== '/' && this.router.url !== '/start') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.controll.scrollToElement(sectionId, offset);
        }, 100);
      });
    } else {
      this.controll.scrollToElement(sectionId, offset);
    }
  }
}