import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from '../../app/main-content/landingpage/landingpage.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    SkillsComponent,
    PortfolioComponent,
    LandingpageComponent,
    IntroductionComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {}
