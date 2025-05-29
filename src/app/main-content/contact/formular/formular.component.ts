import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ControllService } from './../../../controll.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss'],
})
export class FormularComponent {
  http = inject(HttpClient); // In der app.config muss der Provider dazu eingefügt werden
  controll = inject(ControllService);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  mailTest = false;
  submissionSuccess = false;

  post = {
    endPoint: 'https://arditqoku.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as const,
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.submissionSuccess = true;
            ngForm.resetForm();
            setTimeout(() => {
              this.submissionSuccess = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
