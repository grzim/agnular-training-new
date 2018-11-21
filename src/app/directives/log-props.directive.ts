import { Directive, Input } from '@angular/core'

@Directive({
  selector: '[appLogProps]'
})
export class LogPropsDirective {

  @Input() appLogProps;
  constructor() {
  }

  ngOnChanges() {
    console.log(this)
  }
}
