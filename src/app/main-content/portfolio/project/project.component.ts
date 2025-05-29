import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() skills: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() linkTest: string = '';
}
