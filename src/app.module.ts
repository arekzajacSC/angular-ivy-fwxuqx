import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextComponent } from './controls/input-text.component';
import { FormComponent } from './form.component';
import { AutoSaveFormComponent } from './forms/auto-save.component';
import { ReactiveFormComponent } from './forms/reactive.component';
import { TemplateFormComponent } from './forms/template.component';
import { TimeOutValidatorDirective } from './validators/timeOut.validator';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AutoSaveFormComponent,
    TimeOutValidatorDirective,
    InputTextComponent,
  ],
  bootstrap: [FormComponent],
})
export class AppModule {}
