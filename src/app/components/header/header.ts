import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() isMenuOpen = false;
  @Input() isScrolled = false;
  @Output() menuToggled = new EventEmitter<void>();

  onToggleMenu() {
    this.menuToggled.emit();
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.menuToggled.emit();
    }
  }
}
