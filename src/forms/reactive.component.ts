import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'example-reactive-form',
  templateUrl: './reactive.component.html',
})
export class ReactiveFormComponent {
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  form = this.fb.group({
    login: [''],
    password: [''],
    rememberMe: [false],
    radioOption: [null],
    options: this.fb.array([
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]),
  });

  get optionsField(): FormArray {
    return this.form.get('options') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log({
      ...this.form.value,
      options: this.form.value.options.reduce((acc, val, idx) => {
        if (val) {
          acc.push(this.options[idx].value);
        }

        return acc;
      }, []),
    });
  }
}
