import { Injectable } from '@angular/core';
import { Documento } from '../model/documento';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http: Http) {}

  getDocumentos() {
    return this.http.get('/assets/data/datos.json')
      .toPromise()
      .then(res => <Documento[]> res.json().data);
  }
}
