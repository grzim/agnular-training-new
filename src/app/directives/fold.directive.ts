import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'
import { CutToPipe } from '../piepes/cut-to.pipe'

@Directive({
  selector: '[appFold]',
  providers: [ CutToPipe ]
})
export class FoldDirective {

  private isFolded = false;
  private innerHTML: string;

  @Input() numberOfChars: string;

  @HostListener('click') toggleFolding() {
    if(this.isFolded) {
      this.el.nativeElement.innerHTML = this.innerHTML;
    }
    else {
      this.innerHTML = this.el.nativeElement.innerHTML;
      this.el.nativeElement.innerHTML = this.cutToPipe.transform(this.el.nativeElement.innerHTML, Number(this.numberOfChars));
    }
    this.isFolded = !this.isFolded;
  }

  constructor(private el: ElementRef,  private renderer: Renderer2, private cutToPipe: CutToPipe) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  ngOnInit() {
    this.toggleFolding();
  }

}
