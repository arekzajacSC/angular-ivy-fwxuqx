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
  @Output() inputChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input')
  inputElement: ElementRef;

  onChange: (value: any) => void;
  onTouched: () => void;
  private _value: string = null;
  private _focused: boolean = false;

  set value(value: string) {
    this._value = value;
    this.changeDetector.markForCheck();
  }
  get value(): string {
    return this._value;
  }

  set focused(value: boolean) {
    this._focused = value;
  }
  get focused(): boolean {
    return this._focused;
  }

  constructor(private changeDetector: ChangeDetectorRef) {}

  writeValue(value: string): void {
    this.valueChanged.emit(value);
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = (value: string) => {
      this._value = value;
      this.inputChanged.emit(this.value);
      return fn(this.value);
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
    this.focused = true;
    this.inputFocus.emit(event);
  }

  onInputBlur(event: Event) {
    this.focused = false;
    this.inputBlur.emit(event);
    this.onTouched();
  }
}
