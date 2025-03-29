import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/Gif';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {
  private readonly http =  inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  constructor() {
    this.loadTrendingGifs();
   }

  loadTrendingGifs() {
    
    this.http.get<any>(`${environment.urlGif}/gifs/trending`, {
      params: {
        api_key: environment.gifApiKey,
        limit: 20
      }
    }).subscribe((response) => {
     const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
    this.trendingGifs.set(gifs);
    this.trendingGifsLoading.set(false);
    console.log('gifs', gifs);
    
    }
    );

  }

}
