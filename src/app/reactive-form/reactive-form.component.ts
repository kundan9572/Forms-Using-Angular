import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormArray} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  personForm: FormGroup;
  selectedHobbies: [string];
  myHobbies: any=[
    {
      name:"Sports",
      value:"sports",
      selected: true
    },
    {
      name:"Movies",
      value:"movies"
    },
    {
      name:"Bike Riding",
      value:"bike riding",
      selected: true
    },
    {
      name:"Gardening",
      value:"gardening"
    },
    {
      name:"Playing games",
      value:"playing games"
    },
    {
      name: "Listening Music",
      value: "listening music"
    }
  ];

  ngOnInit(){

    this.createFormInputs();
  }

  createFormInputs(){
    this.personForm =   new FormGroup({

      hobbies: this.createHobbies(this.myHobbies)
    });
  }

  createHobbies(hobbiesInput){
    const arr=hobbiesInput.map(hobby=>{
      return new FormControl(hobby.selected || false);
    });
    return new FormArray(arr);
  }


}
