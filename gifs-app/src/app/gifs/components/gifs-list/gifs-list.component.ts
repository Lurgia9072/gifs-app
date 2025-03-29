import { Component, input } from '@angular/core';
import { GifListItemComponent } from '../gif-list-item/gif-list-item.component';
import { Gif } from '../../interfaces/Gif';

@Component({
  selector: 'app-gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {
gifs = input.required<Gif[]>();
}
