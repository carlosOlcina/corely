import { Component, input } from '@angular/core';

@Component({
  selector: 'icons-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {
  size = input<string>('2rem');
}
