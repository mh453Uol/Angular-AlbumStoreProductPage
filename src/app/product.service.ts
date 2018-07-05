import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(id: number) {
    this._http.get(this._albumUrl)
      .map(response => {
        console.log(response.json());
      })
  }
}
