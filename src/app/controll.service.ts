import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ControllService {
  sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();
  isBurgerMenuVisible = true;
  selectedLanguage: string = 'en';
  languageChangeSubject = new BehaviorSubject<string>(this.selectedLanguage);
  private renderer: Renderer2;
  isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();

  images = [
    './../../../assets/img/forms/burger menu.png',
    './../../../assets/img/forms/property-close1.png',
    './../../../assets/img/forms/property-close2.png',
    './../../../assets/img/forms/property-close3.png',
  ];

  skillzArray = [
    { img: '/assets/img/icons/Angular.png', title: 'Angular' },
    { img: '/assets/img/icons/ts.png', title: 'TypeScript' },
    { img: '/assets/img/icons/Javascript.png', title: 'JavaScript' },
    { img: '/assets/img/icons/html.png', title: 'HTML' },
    { img: '/assets/img/icons/firebase.png', title: 'Firebase' },
    { img: '/assets/img/icons/gitskillz.png', title: 'GIT' },
    { img: '/assets/img/icons/css.png', title: 'CSS' },
    { img: '/assets/img/icons/api.png', title: 'Rest-Api' },
    { img: '/assets/img/icons/scrum.png', title: 'Scrum' },
    { img: '/assets/img/icons/material.png', title: 'Material Design' },
    { img: '/assets/img/icons/c-learning.png', title: 'Continually learning' },
  ];

  constructor(
    private translate: TranslateService,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeAnimation();
  }

  initializeAnimation() {
    setTimeout(() => {
      this.isVisibleSubject.next(true);
    }, 0);
  }

  toggleSidebar() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
    this.loadBurgerMenuImages();
    this.isBurgerMenuVisible = !this.isBurgerMenuVisible;
    this.toggleBodyScroll(!this.isBurgerMenuVisible);
  }

  toggleBodyScroll(disable: boolean) {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  loadBurgerMenuImages() {
    this.images.forEach((imageUrl, index) => {
      setTimeout(() => {
        let img = document.getElementById(
          'burgerMenuSlide'
        ) as HTMLImageElement;
        if (img) {
          img.src = imageUrl;
        }
      }, 125 * index);
    });
  }

  setStandardLanguage() {
    // this.translate.setDefaultLang('en');
    // this.translate.use('en');

    const savedLanguage = localStorage.getItem('selectedLanguage');
    const languageToUse = savedLanguage ? savedLanguage : 'en';

    this.translate.setDefaultLang('en');
    this.translate.use(languageToUse);
    this.selectedLanguage = languageToUse;
    this.languageChangeSubject.next(languageToUse);
  }

  switchLanguage(language: string): void {
    if (language && language !== this.selectedLanguage) {
      this.translate.use(language);
      this.selectedLanguage = language;
      localStorage.setItem('selectedLanguage', language);
      this.languageChangeSubject.next(language);
    }
  }

  linkToTop() {
    window.scroll(0, 0);
  }

  setupIntersectionObserver(container: HTMLElement): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'animate');
        } else {
          this.renderer.removeClass(entry.target, 'animate');
        }
      });
    });

    const elements = container.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => observer.observe(el));
  }

  observeElements(): void {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'animate');
        } else {
          this.renderer.removeClass(entry.target, 'animate');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const elements = document.querySelectorAll('.animateOnScroll');
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  scrollToElement(elementId: string, offset: number) {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementPosition = rect.top + scrollTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
