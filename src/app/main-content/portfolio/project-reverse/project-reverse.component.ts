import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-reverse',
  standalone: true,
  imports: [],
  templateUrl: './project-reverse.component.html',
  styleUrl: './project-reverse.component.scss',
})
export class ProjectReverseComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() skills: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() linkTest: string = '';
}
