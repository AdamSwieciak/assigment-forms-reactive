import { FormControl } from "@angular/forms"
import { Observable } from "rxjs"

export class CustomValidators {
    static forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
        if(control.value === 'Test') {
          return {'projectNameIsForbidden': true}
        }
        return null
      }

static asyncInvalidProjectNAme(control: FormControl): Promise<any> | Observable<any>
{
    const promise = new Promise((resolve, rejest) => {
        setTimeout(() => {
            if (control.value === 'Testproject') { 
                resolve({'projectNameIsForbidden': true})
            } else {
                resolve(null)
            }
        }, 2000)
    })
    return promise
}
}