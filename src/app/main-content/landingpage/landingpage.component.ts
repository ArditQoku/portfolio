import {
  Component,
  OnInit,
  Renderer2,
  inject,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ControllService } from './../../controll.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class LandingpageComponent implements OnInit {
  document = inject(DOCUMENT);
  renderer = inject(Renderer2);
  controllService = inject(ControllService);

  @ViewChild('textBox', { static: true }) textBox!: ElementRef;
  @ViewChild('photoLandingpage', { static: true })
  photoLandingpage!: ElementRef;

  ngOnInit(): void {
    this.controllService.observeElements();
    this.loadResponsiveStyles(this.controllService.selectedLanguage);
    this.controllService.languageChangeSubject.subscribe((language) => {
      this.loadResponsiveStyles(language);
    });
  }

  loadResponsiveStyles(language: string): void {
    const head = this.document.getElementsByTagName('head')[0];
    const existingLink = this.document.getElementById(
      'dynamic-responsive-style'
    );
    if (existingLink) {
      this.renderer.removeChild(head, existingLink);
    }

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'type', 'text/css');

    const randomCacheBuster = Math.floor(Math.random() * 10000);
    const href =
      language === 'en'
        ? `./assets/css/responsive.component.css?v=${randomCacheBuster}`
        : `./assets/css/responsivegerman.component.css?v=${randomCacheBuster}`;

    this.renderer.setAttribute(link, 'href', href);
    this.renderer.setAttribute(link, 'id', 'dynamic-responsive-style');
    this.renderer.appendChild(head, link);
  }
}
