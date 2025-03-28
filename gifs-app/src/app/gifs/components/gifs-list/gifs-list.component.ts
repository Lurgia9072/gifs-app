import { Component, input, Input } from '@angular/core';
import { GifListItemComponent } from '../gif-list-item/gif-list-item.component';

@Component({
  selector: 'app-gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {
gifs = input.required<string[]>();
}
