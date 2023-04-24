import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordResetInitService } from './password-reset-init.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'jhi-password-reset-init',
  templateUrl: './password-reset-init.component.html',
  styleUrls: ['./password-reset-init.component.scss', '../../register/register.component.css'],
})
export class PasswordResetInitComponent implements AfterViewInit {
  @ViewChild('email', { static: false })
  email?: ElementRef;

  success = false;
  resetRequestForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
  });

  constructor(private passwordResetInitService: PasswordResetInitService, private fb: FormBuilder) {}

  ngAfterViewInit(): void {
    if (this.email) {
      this.email.nativeElement.focus();
    }
  }

  requestReset(): void {
    this.passwordResetInitService.save(this.resetRequestForm.get(['email'])!.value).subscribe(
      () => {
        this.success = true;
        console.log('success email sent');
      },
      error => {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: 'El correo ingresado no se encuentra registrado',
          icon: 'error',
          confirmButtonColor: '#3381f6',
          confirmButtonText: 'Cerrar',
        });
      }
    );
  }
}
