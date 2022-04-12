import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'example-auto-save-form',
  templateUrl: './auto-save.component.html',
})
export class AutoSaveFormComponent {
  onSubmit(form: NgForm) {
    if (form.dirty) {
      console.log(form.value);
      form.reset(form.value);
    }
  }
}
