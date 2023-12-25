import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.css']
})
export class SubHeadingComponent {
  @Input() content :any = ''
}
