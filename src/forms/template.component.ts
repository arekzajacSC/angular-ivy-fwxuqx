import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'example-template-form',
  templateUrl: './template.component.html',
})
export class TemplateFormComponent {
  options = [
    { value: 'option1', label: 'Option 1', checked: false },
    { value: 'option2', label: 'Option 2', checked: false },
    { value: 'option3', label: 'Option 3', checked: false },
  ];

  onSubmit(form: NgForm) {
    console.log({
      ...form.value,
      options: this.options
        .filter((option) => option.checked)
        .map((option) => option.value),
    });
  }
}
