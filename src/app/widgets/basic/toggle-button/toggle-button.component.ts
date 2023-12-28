import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
  @Input() label: string = '';
  @Input() isChecked = false;
  @Output() toggleChange = new EventEmitter<boolean>();
 

  onToggle(): void {
    this.isChecked = !this.isChecked;
    this.toggleChange.emit(this.isChecked);
  }
}
