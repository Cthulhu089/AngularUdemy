import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artist: string;
  constructor( public _spotify: SpotifyService) {

   }

   SearchArtist () {
     if (this.artist.length == 0) {
         return;
     }

     this._spotify.getArtist(this.artist)
                  .subscribe( resp => {
                    console.log(resp);
                  });
   }

}
