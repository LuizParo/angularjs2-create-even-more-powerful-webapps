import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { FotoComponent } from './foto.component';

@Injectable()
export class FotoService {
    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
    }

    lista(): Observable<FotoComponent[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    buscaPorId(id: string): Observable<FotoComponent> {
        return this.http.get(`${this.url}/${id}`)
            .map(res => res.json());
    }

    cadastra(foto: FotoComponent): Observable<MensagemCadastro>  {
        if(foto._id) {
            return this.http.put(`${this.url}/${foto._id}`, JSON.stringify(foto), {headers : this.headers})
                .map(() => new MensagemCadastro(`Foto '${foto.titulo}' alterada com sucesso`, false));
        }

        return this.http.post(this.url, JSON.stringify(foto), {headers : this.headers})
            .map(() => new MensagemCadastro(`Foto '${foto.titulo}' incluída com sucesso`, true));
    }

    remove(foto: FotoComponent): Observable<Response> {
        return this.http.delete(`${this.url}/${foto._id}`);
    }
}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    public get mensagem(): string {
        return this._mensagem;
    }

    public get inclusao(): boolean {
        return this._inclusao;
    }
}