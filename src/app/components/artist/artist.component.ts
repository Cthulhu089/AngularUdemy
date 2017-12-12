import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artistInfo:any = {};
  artistTopTracks:any = {}
  constructor(private activatedRoute:ActivatedRoute,
              public _spotify:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map( params => params['id']).subscribe( id => {

      this._spotify.showArtist(id).subscribe( artist => {
        this.artistInfo = artist;
      });

      this._spotify.getTopTracks(id).subscribe( topTracks => {
        this.artistTopTracks = topTracks;
      });

    });

  }

}
