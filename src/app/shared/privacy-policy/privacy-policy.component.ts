import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ControllService } from './../../controll.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  controll = inject(ControllService);
}
