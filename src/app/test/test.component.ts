import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-test',
  template: `
    <p>
      test works much work!
    </p>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
