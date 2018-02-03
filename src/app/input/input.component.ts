import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <form (submit) ="onSubmit($event, input)" class="form-inline">
    <input class="form-control col"
    #input>
    <button class="btn btn-primary">Go!</button>
  </form>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() submit = new EventEmitter<string>();
  onSubmit(event: Event, input: HTMLInputElement) {
    event.stopPropagation();
    console.trace();
    this.submit.emit(input.value);
    input.value = "";
    return false;
   }

}
