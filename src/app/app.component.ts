import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CustomValidators } from './custom-validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  singupForm: FormGroup


  ngOnInit() {
    this.singupForm= new FormGroup({
      projectname: new FormControl(null, [Validators.required, CustomValidators.forbiddenProjectName], CustomValidators.asyncInvalidProjectNAme),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectstatus: new FormControl('critical', )
    })
  }


  onClick(){
    console.log(this.singupForm.value)
  }
}
