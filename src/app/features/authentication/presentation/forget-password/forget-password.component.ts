import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetPasswordPresenter } from './forget-password.presenter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ForgetPasswordPresenter],
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private presenter: ForgetPasswordPresenter
   ) {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      this.presenter.forgetPassword(this.forgetPasswordForm.value.email)
        .subscribe(response => {
          // Handle successful password reset request
        });
    }
  }
}