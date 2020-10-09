import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

  person: any = {};

  ngOnInit(): void {
    this.person = {
      firstName: 'Kundan',
      lastName: 'Kumar'
    };
  }

  submitForm = (form: any) => {};

  clearForm = (form: any) => {
    form.reset();
    form.submitted = false;
  };
}
