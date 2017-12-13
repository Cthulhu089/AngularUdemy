import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  headers:HttpHeaders;
  artists:any[] = [];
  spotifyUrl:string = 'https://api.spotify.com/v1/';
  token:string = 'TokenSpotify';
  artistTopTracks:any[] = [];

  constructor(public http:HttpClient) {
    this.setHeader();
  }

  setHeader(){
    this.headers = new HttpHeaders({
      'authorization': '' + this.token
    });
  }

  private getHeader(): HttpHeaders {
    return this.headers;
  }

  showArtist(artistId:string) {
    let url = `${this.spotifyUrl}artist/${artistId}`;
    let headers = this.getHeader();

    return this.http.get(url, {headers}).map( (resp:any) => {
        this.artists = resp.artists.items;
        return this.artists;
      });

  }

  getTopTracks (artistId:string) {
    let url = `${this.spotifyUrl}artist/${artistId}/top-tracks?country=US`;
    let headers = this.getHeader();

    return this.http.get(url, {headers}).map( (resp:any) => {
        this.artists = resp.artists.items;
        return this.artists;
      });
  }

  getArtist (artist:string) {
    let url = `${this.spotifyUrl}search?query=${artist}`;
    let headers = this.getHeader();

    return this.http.get(url, {headers}).map( (resp:any) => {
        this.artistTopTracks = resp.artists.items;
        return this.artistTopTracks;
      });
    }
}
