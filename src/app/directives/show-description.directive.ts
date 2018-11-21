import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appShowDescription]'
})
export class ShowDescriptionDirective {

  @Input() appShowDescription: string;
  private node = document.createElement('div');

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.appendChild(this.node);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.removeChild(this.node);
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.node.innerText = this.appShowDescription;
  }
}