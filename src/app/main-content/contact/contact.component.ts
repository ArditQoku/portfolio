import { Component, inject } from '@angular/core';
import { FormularComponent } from './formular/formular.component';
import { TranslateModule } from '@ngx-translate/core';
import { ControllService } from './../../controll.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormularComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  controll = inject(ControllService);

  ngOnInit() {
    this.controll.observeElements();
  }
}
