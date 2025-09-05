import { Component, input, output } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'lib-input',
  templateUrl: './input.html',
  styleUrl: './input.css',
  imports: [LucideAngularModule],
})
export class Input {
  readonly SearchIcon = Search;
  inputType = input<string>('');
  onValueChange = output<string>();

  inputChangeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    this.onValueChange.emit(input.value);
  }
}
