import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ex-input-text',
  templateUrl: 'input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTextComponent,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() placeholder: string = '';

  @Output() inputFocus: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() inputBlur: EventEmitter<Event> = new EventEmitter<Event>();

  @ViewChild('input')
  inputElement: ElementRef;

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(private changeDetector: ChangeDetectorRef) {}

  writeValue(value: string): void {
    if (this.inputElement) {
      this.inputElement.nativeElement.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = (value: string) => {
      return fn(value);
    };
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputElement.nativeElement.setAttribute('disabled', 'true');
    } else {
      this.inputElement.nativeElement.removeAttribute('disabled');
    }
    this.changeDetector.markForCheck();
  }

  onInputFocus(event: Event) {
    this.inputFocus.emit(event);
  }

  onInputBlur(event: Event) {
    this.inputBlur.emit(event);
    this.onTouched();
  }

  handleInput({ target }) {
    this.onChange(target.value);
  }
}
