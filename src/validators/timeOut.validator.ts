import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: 'form[timeOut]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: TimeOutValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeOutValidatorDirective implements AsyncValidator {
  @Input('timeOut')
  limit: number;

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return timer(this.limit).pipe(map(() => ({ message: 'Timeout exceeded' })));
  }
}
