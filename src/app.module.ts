import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';
import { AutoSaveFormComponent } from './forms/auto-save.component';
import { ReactiveFormComponent } from './forms/reactive.component';
import { TemplateFormComponent } from './forms/template.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AutoSaveFormComponent,
  ],
  bootstrap: [FormComponent],
})
export class AppModule {}
