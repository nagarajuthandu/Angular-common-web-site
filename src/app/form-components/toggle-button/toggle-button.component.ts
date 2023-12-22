import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
  @Input() label: string = '';
  @Output() toggleChange = new EventEmitter<boolean>();
  isChecked = false;

  onToggle(): void {
    this.isChecked = !this.isChecked;
    this.toggleChange.emit(this.isChecked);
  }
}
