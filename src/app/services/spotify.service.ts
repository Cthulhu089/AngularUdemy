import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable()
export class SpotifyService {

  artists:any[] = [];

  constructor(public http:HttpClient) {
  console.log("SpotifyService");
}

getArtist (artist:string) {
  let url = "";
  let headers = new HttpHeaders({
    'authorization': ''
  });

  return this.http.get(url, {headers}).map( (resp:any) => {
      this.artists = resp.artists.items;
      return this.artists;
  });

}

}
