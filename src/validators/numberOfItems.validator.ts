import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function numberOfItems(max: number, min = 0): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const items = control.value.split(',');

    return items.length < min || items.length > max
      ? { numberOfItems: { value: control.value, min, max } }
      : null;
  };
}
