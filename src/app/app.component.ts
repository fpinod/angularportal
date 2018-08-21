import { Component, OnInit } from '@angular/core';
import { DocumentoService } from './service/documento.service';
import { Documento } from './model/documento';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  listaDocumento: Documento[];
  listaDocumentoSeleccionado: Documento[];
  cols: any[];

  constructor(
    private documentoService: DocumentoService
  ) { }

  ngOnInit() {
//    this.listaDocumento = this.documentoService.getDocumentos();
    this.documentoService.getDocumentos().then(files => this.listaDocumento = files);

    this.cols = [
      { field: 'numero', header: 'Documento' },
      { field: 'cuenta', header: 'Cuenta' },
      { field: 'emision', header: 'Emision' },
      { field: 'vencimineto', header: 'Vencimiento' },
      { field: 'total', header: 'Total'},
      { field: 'pendiente', header: 'Pendiente'}
  ];
  }

  corregir() {
    console.log('size ' + this.listaDocumentoSeleccionado.length);
    for (let index = 0; index < this.listaDocumentoSeleccionado.length; index++) {
      const element = this.listaDocumentoSeleccionado[index];
      if (element.children != null) {
        console.log('cuenta' + this.listaDocumentoSeleccionado[index].data.cuenta);
      //  this.listaDocumentoSeleccionado[index].children.splice(0);
      }
    }
  }

}

