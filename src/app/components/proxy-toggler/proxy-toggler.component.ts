import { Component, HostListener, Input, OnInit } from '@angular/core'
import { TogglerComponent } from '../toggler/toggler.component'

@Component({
  selector: 'app-proxy-toggler',
  templateUrl: './proxy-toggler.component.html',
  styleUrls: ['./proxy-toggler.component.scss']
})
export class ProxyTogglerComponent implements OnInit {

  @Input() componentToToggle: TogglerComponent;

  @HostListener('click') toggle() {
    this.componentToToggle.toggle();
  }
  constructor() { }

  ngOnInit() {
  }

}
