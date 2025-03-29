import { Gif } from "../interfaces/Gif";
import { GifItem } from "../interfaces/gifs.interface";

export class GifMapper {
    static mapGiphyItemToGif(gif: GifItem): Gif {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
        };
    }

    static mapGiphyItemsToGifs(gifs: GifItem[]): Gif[] {
        return gifs.map(GifMapper.mapGiphyItemToGif);
    }
}