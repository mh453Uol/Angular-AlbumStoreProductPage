import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private albumUrl = './assets/album.json';
  constructor(private http: Http) { }

  getAlbum(id: number) {
    this.http.get(this.albumUrl)
      .subscribe((response) => {
        console.log(response.json());
      })
  }
}
